import { Form, Row, Col, Container } from 'react-bootstrap';
import FormGroup from '../components/template/FormGroup';
import BotonSuccess from '../components/template/BotonSuccess';
import BotonOutlineDanger from '../components/template/BotonOutlineDanger';
import { useState } from 'react';

export const Registrarse = () => {

  const [validate, setValidate]=useState(false);
  const tipo="submit"
  const bg="bg"

  const validacion=()=>{
    if(!validate){
      setValidate(true);
      console.log("enviado")
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
                      controlId="formBasicName" 
                      placeholder="Nombre"/>

            <FormGroup type="text" 
                       texto="Apellido" 
                       controlId="formBasicLastName" 
                       placeholder="Apellido"/>

            <FormGroup type="number" 
                       texto="Telefono" 
                       controlId="formBasicPhone" 
                       placeholder="Telefono"/>
     
          </Col>
          <Col  sm={12} md={6}>
            <FormGroup type="email" 
                      texto="Email" 
                      controlId="formBasicEmail" 
                      placeholder="E-mail"/>

            <FormGroup type="password" 
                      texto="Password" 
                      controlId="formBasicPassword" 
                      placeholder="Password"/>

            <FormGroup type="password" 
                      texto="Confirme contraseña" 
                      controlId="formBasicPasswordConfirmation" 
                      placeholder="Repetir Contraseña"/>
     
          </Col>
        </Row>
        <Container className="d-grid d-md-flex justify-content-center justify-content-lg-end  gap-2">
          <BotonSuccess type={tipo} 
                        texto="Aceptar" 
                        onSubmit={validacion} />
          <BotonOutlineDanger 
                        type={tipo} 
                        texto="Cancelar" />
        </Container>
      </Form>
      
    </div>
  );
};