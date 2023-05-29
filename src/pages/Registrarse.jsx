import { Form, Row, Col, Container } from 'react-bootstrap';
import BotonAceptar from './../components/template/BotonAceptar';
import BotonCancelar from './../components/template/BotonCancelar';
import { useState } from 'react';

export const Registrarse = () => {

  const [validate, setValidate]=useState(false);
  const tipo="submit"
  const bg=`bg`

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
          <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" />
        </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
          {/* <Form.Text className="text-muted">
            Tus correo está protegido.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Repita Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Col>

        </Row>
        <Container className="d-flex justify-content-lg-end">
        <BotonAceptar type={tipo}>
        </BotonAceptar>
        <BotonCancelar type={tipo}>
        </BotonCancelar>
        </Container>
      </Form>
      
    </div>
  );
};