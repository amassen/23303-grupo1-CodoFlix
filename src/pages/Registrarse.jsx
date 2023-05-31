import { Form, Row, Col, Container } from 'react-bootstrap';
import FormGroup from '../components/template/FormGroup';
import BotonSuccess from '../components/template/BotonSuccess';
import BotonOutlineDanger from '../components/template/BotonOutlineDanger';
import { useState } from 'react';
import { HeadlineH2 } from '../components/atom/Headlineh2'

export const Registrarse = () => {

  //Tuto
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    phone: '',
    mail: '',
    pass: '',
    cpass: '',
  });
  const [errors, setErrors] = useState({})
  const regexPhone = /^([0-9]{10,13})$/
  const regexMail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexPass = /^.{1,255}$/
  const tipo="submit"
  const bg="bg"

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      //!!
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };
 

  const validateForm = ()=>{
    const {name, lastName, phone, mail, pass, cpass} = form
    const newErrors ={}

    if(!name||name ==='') newErrors.name='Ingrese un nombre'
    if(!lastName||lastName ==='') newErrors.lastName='Ingrese un apellido'
    if(!phone||!regexPhone.test(phone.trim())) newErrors.phone='Telefono invalido'
    if(!mail||!regexMail.test(mail.trim())) newErrors.mail='Ingrese mail válido'
    if(!pass||!regexPass.test(pass.trim())) newErrors.pass='Ingrese una contraseña válida debe tener de minima 8 caracteres'
    if(!cpass||cpass!==pass) newErrors.cpass='Ambas contraseñas deben coincidir'
    return newErrors
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formErrors = validateForm()
    console.log(form)
    if (Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }else{
      console.log('formulario enviado')
      console.log('Datos para post..')
      console.log(form)
      }
    }

  return (
    <div>Registrarse</div>
  )
}
