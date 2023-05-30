import React from 'react'
import { Col, Row } from 'react-bootstrap'

/*
* Componente para mostrar mensajes
* REcibe por props:
* -msg: el mensaje que se va a mostrar
* -bgColor: el color de fondo, tneer en cuenta que por default el texto 
* es blanco, si no recibe color de fondo esta seteado a negro por default 
*/
const Message = ({ msg, bgColor }) => {
  let styles = {
    backgroundColor: bgColor ? bgColor : '#070000'
  }

  return (
    <Row as="div" style={styles}>
      <Col sm={{ span: 6, offset: 3 }}>
        <p className="msg" dangerouslySetInnerHTML={{ __html: msg }} />
      </Col>
    </Row>
  )
}

export default Message
