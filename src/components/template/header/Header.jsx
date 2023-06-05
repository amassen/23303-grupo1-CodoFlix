import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
import { Row } from 'react-bootstrap'
import { HeaderLogo } from './HeaderLogo'
import { HeaderButtons } from './HeaderButtons'

export const Header = () => {
  return (
    <header>
      <Navbar expand={false} className="my-2">
        <Container>
          <Row>
            <HeaderLogo />
            <HeaderButtons />
          </Row>
        </Container>
      </Navbar>
    </header>
  )
}
