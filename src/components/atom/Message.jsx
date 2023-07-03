import React from 'react'
import { Col, Row } from 'react-bootstrap'

/*
* Componente para mostrar mensajes
* REcibe por props:
* -msg: el mensaje que se va a mostrar
* -bgColor: el color de fondo, por default es negro, si recibe prop 
* se personaliza.
* -txtColor: el color del texto, por default es negro, si recibe prop
* se personaliza.
*/
const Message = ({ msg, bgColor, txtColor }) => {
  let styles = {
    backgroundColor: bgColor ? bgColor : '#070000',
    txtColor: txtColor ? txtColor: '#000',
    fontWeight: 800,
  }

  return (
    <Row as="div" style={styles}>
      <Col sm={{ span: 10, offset: 2 }}>
        <p className="msg" dangerouslySetInnerHTML={{ __html: msg }} />
      </Col>
    </Row>
  )
}

export default Message
