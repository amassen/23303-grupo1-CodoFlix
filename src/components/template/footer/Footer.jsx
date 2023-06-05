import React from 'react'
import { FooterLogo } from './FooterLogo'
import { FooterContact } from './FooterContact'
import { FooterCopyright } from './FooterCopyright'
import './Footer.css'
import { Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer>
      <Container className="container-lg py-3">
        <Row className="row">
          <FooterLogo text="CodoFlix" />
          <FooterContact text="contacto" />
          <FooterCopyright />
        </Row>
      </Container>
    </footer>
  )
}
