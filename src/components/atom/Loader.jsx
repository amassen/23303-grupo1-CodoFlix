import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

/* Loader que recibe como props:
 * - animation: si no la recibe como prop por default es 'border',
 * el otro valor que puede recibir es 'grow'
 * - variant: si no recibe como prop por default es 'warning',
 * valores posibles: 'primary', 'secondary', 'sucess', 'danger',
 * 'info', 'light', 'dark'
 * - textHidden: el texto que ayuda en la accesibilidad, por default es 'Cargando...'
 * - text: el texto que se vera junto al spinner
 */
const Loader = ({ animation, variant, textHidden, text }) => {
  return (
    <Container fluid>
      <Row className="py-3">
        <Col className="col-sm-12" sm={{ span: 10, offset: 2 }}>
          <Spinner
            animation={animation ? animation : 'border'}
            role="status"
            variant={variant ? variant : 'warning'}
          >
            <span className="visually-hidden">
              {textHidden ? textHidden : 'Cargando...'}
            </span>
          </Spinner>
        </Col>
        <Col className="col-sm-12 text-center" >{text ? text : ''}</Col>
      </Row>
    </Container>
  )
}

export default Loader
