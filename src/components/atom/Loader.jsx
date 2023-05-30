import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

/* Loader que recibe como props:
 * - animation: si no la recibe como prop por default es 'border',
 * el otro valor que puede recibir es 'grow'
 * - variant: si no recibe como prop por default es 'warning',
 * valores posibles: 'primary', 'secondary', 'sucess', 'danger',
 * 'info', 'light', 'dark'
 * - text: el texto que ayuda en la accesibilidad, por default es 'Cargando...'
 */
const Loader = ({ animation, variant, text }) => {
  return (
    <Container fluid>
      <Row className="py-3">
        <Col sm={{ span: 4, offset: 4 }}>
          <Spinner
            animation={animation ? animation : 'border'}
            role="status"
            variant={variant ? variant : 'warning'}
          >
            <span className="visually-hidden">
              {text ? text : 'Cargando...'}
            </span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}

export default Loader
