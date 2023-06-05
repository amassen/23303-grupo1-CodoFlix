import React from 'react'
import { Col, Navbar } from 'react-bootstrap'

export const HeaderLogo = () => {
  return (
    <Col xs={12} md={8}>
      <Navbar.Brand href="/">CodoFlix</Navbar.Brand>
    </Col>
  )
}
