<<<<<<< HEAD
import { Form, Row, Col, Container } from 'react-bootstrap';
import FormGroup from '../components/template/FormGroup';
import { useState } from 'react';
import { regexPhone,regexEmail } from '../utils/constants';
 import { HeadlineH2 } from '../components/atom/Headlineh2' 
import BotonPrimary from '../components/atom/BotonPrimary';
import BotonOutline from '../components/atom/BotonOutline';
import "../components/atom/btncolors.css"
=======
import { HeadlineH2 } from '../components/atom/Headlineh2'
>>>>>>> main

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
  /* <Anterior:*/
  //const regexPass = /^.{8,20}$/ 
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/
  const tipo="submit"
   /* Colores */
  const bg="bg-dark"
  const fontColor="text-light"

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
    if(!phone||!regexPhone.test(phone.trim())) newErrors.phone='Telefono invalido, ingrese hasta 13 dígitos'
    if(!mail||!regexEmail.test(mail.trim())) newErrors.mail='Ingrese mail válido'
    if(!pass||!regexPass.test(pass.trim())) newErrors.pass='Ingrese una contraseña válida debe tener entre 8 y 20 caracteres'
    if(!cpass||cpass!==pass) newErrors.cpass='Ambas contraseñas deben coincidir'
    return newErrors
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formErrors = validateForm()
    console.log(form)
    if (Object.keys(formErrors).length > 0){
      setErrors(formErrors)
      showMsg('Error en el formulario')
    }else{
      showMsg('Formmulario Enviado')
      console.log('Datos para post..')
      console.log(form)
      }
    }

    function showMsg(msg){
      console.log(msg)
    }

    const handleCancel=(e)=>{
      e.preventDefault();
      setForm(
        { name: '',
          lastName: '',
          phone: '',
          mail: '',
          pass: '',
          cpass: ''}
      )
      showMsg("Envio Cancelado")
    }

  return (
    <div className={`container w-50 ${bg} ${fontColor} rounded p-4 mt-4 mb-4`}>
      <HeadlineH2>Registrarse</HeadlineH2>
      <Form>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup type="text" 
                      texto="Nombre" 
                      controlId="name" 
                      placeholder="Nombre"
                      valor={form.name}
                      onCambio={(e)=>setField('name',e.target.value)}
                      esInvalido={errors.name}
                      feedbackType="invalid"
                      typeError={errors.name}/>
                      
            <FormGroup type="text" 
                       texto="Apellido" 
                       controlId="lastName" 
                       placeholder="Apellido"
                       valor={form.lastName}
                       onCambio={(e)=>setField('lastName',e.target.value)}
                       esInvalido={errors.lastName}
                       feedbackType="invalid"
                       typeError={errors.lastName}/>

            <FormGroup type="number" 
                       texto="Telefono" 
                       controlId="phone" 
                       placeholder="Telefono"
                       valor={form.phone}
                       onCambio={(e)=>setField('phone',e.target.value)}
                       esInvalido={errors.phone}
                       feedbackType="invalid"
                       typeError={errors.phone}/>
          </Col>
          <Col  sm={12} md={6}>
            <FormGroup type="email" 
                      texto="Email" 
                      controlId="mail" 
                      placeholder="E-mail"
                      valor={form.mail}
                      onCambio={(e)=>setField('mail',e.target.value)}
                      esInvalido={errors.mail}
                      feedbackType="invalid"
                      typeError={errors.mail}/>

            <FormGroup type="text" 
                      texto="Contraseña" 
                      controlId="pass" 
                      placeholder="Password"
                      valor={form.pass}
                      onCambio={(e)=>setField('pass',e.target.value)}
                      esInvalido={errors.pass}
                      feedbackType="invalid"
                      typeError={errors.pass}/>

            <FormGroup type="text" 
                      texto="Confirme contraseña" 
                      controlId="cpass" 
                      placeholder="Repetir Contraseña"
                      valor={form.cpass}
                      onCambio={(e)=>setField('cpass',e.target.value)}
                      esInvalido={errors.cpass}
                      feedbackType="invalid"
                      typeError={errors.cpass}/>
     
          </Col>
        </Row>
        <Container className="d-grid d-md-flex justify-content-center justify-content-lg-end  gap-2">
          <BotonPrimary type={tipo}
                        clasebtn={" btn-ok"}//para custom clases dejar 1 espacio antes
                        texto="Aceptar" 
                        enClick={handleSubmit}
                        />
          <BotonOutline 
                        type={tipo} 
                        clasebtn={" btn-reject "}//para custom clases dejar 1 espacio antes
                        texto="Cancelar" 
                        enClick={handleCancel}
                        />
        </Container>
      </Form>
      
    </div>
  );
};
