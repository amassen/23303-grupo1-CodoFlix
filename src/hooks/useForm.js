import { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Swal from 'sweetalert2'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const sweetAlertConfirmation = () => {
    let timerInterval
    Swal.fire({
      title: 'Enviando formulario',
      html: 'Se está procesando el envío de datos.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Fui cerrado con el timer')
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(form))

    if (Object.keys(errors).length === 0) {
      sweetAlertConfirmation()
      setLoading(true)
      helpHttp()
        .post('https://formsubmit.co/ajax/costamariaeugenia1@gmail.com', {
          body: form,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setLoading(false)
          setResponse(true)
          setForm(initialForm)
          setTimeout(() => setResponse(false), 4000)
        })
    } else {
      return
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
