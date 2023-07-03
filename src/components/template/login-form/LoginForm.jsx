import React, {useState} from 'react'
import BotonOutline from '../../atom/BotonOutline'
import BotonPrimary from '../../atom/BotonPrimary'
import { regexPass, regexEmail} from '../../../utils/constants'
import { ERROR_MSG, ERROR_REQUIRED } from '../../../utils/formsMessages'
import { Col, Container, Form, Row } from 'react-bootstrap'
import FormGroup from '../register-form/FormGroup'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const initialState = {
        mail: '',
        pass: ''
      }
    const [form, setForm] = useState(initialState)
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
        const { mail, pass } = form
        const newErrors = {}

        if (!mail || !regexEmail.test(mail.trim())) newErrors.mail = ERROR_MSG.email
        if (!pass || !regexPass.test(pass.trim()))
            newErrors.pass = ERROR_MSG.firstPassword
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
              'Error en el Login',
              'Por favor verifica usuario y contraseña.'
            )
          } else {
            showMsg('success', 'Estás logueado', 'Bienvenido!')
          }
        }
    const handleCancel = (e) => {
        e.preventDefault()
        setForm(initialState)
        showMsg('error', 'Login cancelado', 'No estás logueado.')
        }

    const handleRegister=(e)=>{
        e.preventDefault()
        //LO que haga 
     
    }

  return (
    
    <Form /* onSubmit={handleSubmit} */>
      <Row>
        <Col sm={8} md={6}>
          
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
        </Col>
        
        <Col sm={4} md={6}  className="align-self-center h-100 rounded">
        <Container className="text-center"> 
        <p>Nuevo en codoflix? Registrate!</p>
        <Link to="/registrarse">
        <BotonOutline
          type="submit" 
          clasebtn={'-warning'}
          texto="Registro"
          onClick={handleRegister}
        /></Link>
          </Container>
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