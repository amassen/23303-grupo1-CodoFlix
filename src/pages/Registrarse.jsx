import { Form, Row, Col, Container } from 'react-bootstrap';
import FormGroup from '../components/template/FormGroup';
import BotonSuccess from '../components/template/BotonSuccess';
import BotonOutlineDanger from '../components/template/BotonOutlineDanger';
import { useState } from 'react';

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
    <div className={`container w-50 ${bg} p-4`}>
      <h2>Registrarse</h2>
      <Form>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup type="text" 
                      texto="Nombre" 
                      controlId="name" 
                      placeholder="Nombre"
                      valor={form.name}
                      onCambio={(e)=>setField('name',e.target.value)}
                      esInvalido={errors.name}//!!
                      feedbackType="invalid"
                      typeError={errors.name}/>
                      
            <FormGroup type="text" 
                       texto="Apellido" 
                       controlId="lastName" 
                       placeholder="Apellido"
                       valor={form.lastName}
                       onCambio={(e)=>setField('lastName',e.target.value)}
                       esInvalido={errors.lastName}//!!
                       feedbackType="invalid"
                       typeError={errors.lastName}/>

            <FormGroup type="number" 
                       texto="Telefono" 
                       controlId="phone" 
                       placeholder="Telefono"
                       valor={form.phone}
                       onCambio={(e)=>setField('phone',e.target.value)}
                       esInvalido={errors.phone}//!!
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
                      esInvalido={errors.mail}//!!
                      feedbackType="invalid"
                      typeError={errors.mail}/>

            <FormGroup type="password" 
                      texto="Contraseña" 
                      controlId="pass" 
                      placeholder="Password"
                      valor={form.pass}
                      onCambio={(e)=>setField('pass',e.target.value)}
                      esInvalido={errors.pass}//!!
                      feedbackType="invalid"
                      typeError={errors.pass}/>

            <FormGroup type="password" 
                      texto="Confirme contraseña" 
                      controlId="cpass" 
                      placeholder="Repetir Contraseña"
                      valor={form.cpass}
                      onCambio={(e)=>setField('cpass',e.target.value)}
                      esInvalido={errors.cpass}//!!
                      feedbackType="invalid"
                      typeError={errors.cpass}/>
     
          </Col>
        </Row>
        <Container className="d-grid d-md-flex justify-content-center justify-content-lg-end  gap-2">
          <BotonSuccess type={tipo} 
                        texto="Aceptar" 
                        enClick={handleSubmit}
                        />
          <BotonOutlineDanger 
                        type={tipo} 
                        texto="Cancelar" 
                        enClick={console.log("cancelado")}
                        />
        </Container>
      </Form>
      
    </div>
  );
};