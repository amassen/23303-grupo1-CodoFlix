import { useState } from 'react'
import BotonOutline from '../../atom/BotonOutline'
import BotonPrimary from '../../atom/BotonPrimary'
import { Col, Container, Form, Row } from 'react-bootstrap'
import FormGroup from './FormGroup'
import { regexPass, regexEmail, regexPhone } from '../../../utils/constants'
import { ERROR_MSG, ERROR_REQUIRED } from '../../../utils/formsMessages'
import Swal from 'sweetalert2'

export const RegisterForm = () => {
  const intialState = {
    nombre: '',
    apellido: '',
    phone: '',
    mail: '',
    pass: '',
    cpass: ''
  }
  const [form, setForm] = useState(intialState)
  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      })
    }
  }

  const validateForm = () => {
    const { nombre, apellido, phone, mail, pass, cpass } = form
    const newErrors = {}

    if (!nombre || nombre === '') newErrors.name = ERROR_REQUIRED.firstName
    if (!apellido || apellido === '')
      newErrors.apellido = ERROR_REQUIRED.lastName
    if (!phone || !regexPhone.test(phone.trim()))
      newErrors.phone = ERROR_MSG.telephone
    if (!mail || !regexEmail.test(mail.trim())) newErrors.mail = ERROR_MSG.email
    if (!pass || !regexPass.test(pass.trim()))
      newErrors.pass = ERROR_MSG.firstPassword
    if (!cpass || cpass !== pass) newErrors.cpass = ERROR_MSG.secondPassword
    return newErrors
  }

  const showMsg = (alertIcon, alertTitle, alertText) =>
    Swal.fire({
      icon: alertIcon,
      title: alertTitle,
      text: alertText
    })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      showMsg(
        'error',
        'Error en el formulario',
        'Por favor mira los mensajes de error del formulario.'
      )
    } else {
      showMsg('success', 'Formulario Enviado', 'Se envió correctamente.')
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setForm(intialState)
    showMsg('error', 'Envio Cancelado', 'Se cancelo el envío.')
  }

  return (
    <Form>
      <Row>
        <Col sm={12} md={6}>
          <FormGroup
            type="text"
            texto="Nombre"
            controlId="nombre"
            placeholder="Nombre"
            valor={form.name}
            onCambio={(e) => setField('nombre', e.target.value)}
            esInvalido={errors.name}
            feedbackType="invalid"
            typeError={errors.name}
          />
          <FormGroup
            type="text"
            texto="Apellido"
            controlId="lastName"
            placeholder="Apellido"
            valor={form.lastName}
            onCambio={(e) => setField('apellido', e.target.value)}
            esInvalido={errors.lastName}
            feedbackType="invalid"
            typeError={errors.lastName}
          />
          <FormGroup
            type="number"
            texto="Telefono"
            controlId="phone"
            placeholder="Telefono"
            valor={form.phone}
            onCambio={(e) => setField('phone', e.target.value)}
            esInvalido={errors.phone}
            feedbackType="invalid"
            typeError={errors.phone}
          />
        </Col>
        <Col sm={12} md={6}>
          <FormGroup
            type="email"
            texto="Email"
            controlId="mail"
            placeholder="E-mail"
            valor={form.mail}
            onCambio={(e) => setField('mail', e.target.value)}
            esInvalido={errors.mail}
            feedbackType="invalid"
            typeError={errors.mail}
          />
          <FormGroup
            type="password"
            texto="Contraseña"
            controlId="pass"
            placeholder="Password"
            valor={form.pass}
            onCambio={(e) => setField('pass', e.target.value)}
            esInvalido={errors.pass}
            feedbackType="invalid"
            typeError={errors.pass}
          />
          <FormGroup
            type="password"
            texto="Confirme contraseña"
            controlId="cpass"
            placeholder="Repetir Contraseña"
            valor={form.cpass}
            onCambio={(e) => setField('cpass', e.target.value)}
            esInvalido={errors.cpass}
            feedbackType="invalid"
            typeError={errors.cpass}
          />
        </Col>
      </Row>
      <Container className="d-grid d-md-flex justify-content-center gap-4 my-3">
        <BotonPrimary
          type="submit"
          clasebtn={' btn-ok'}
          texto="Enviar"
          onClick={handleSubmit}
        />
        <BotonOutline
          type="submit"
          clasebtn={' btn-reject '}
          texto="Cancelar"
          onClick={handleCancel}
        />
      </Container>
    </Form>
  )
}
