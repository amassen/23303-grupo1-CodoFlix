import React, { useContext } from 'react'
import { Button, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import AuthContext from '../../../context/AuthContext'
import { Link } from 'react-router-dom'

export const HeaderButtons = () => {
  const { auth, handleAuth } = useContext(AuthContext)
  const handleClick = () => {
    handleAuth()
  }

  return (
    <Col>
      {auth ? (
        <>
          <span>usuario</span>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Usuario
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">Home</Link>
                <Link to="/panel-usuario-favoritos">Favoritos</Link>
                <Link to="/panel-usuario-datos">Actualizar datos</Link>
                <Link to="/">
                  <Button onClick={handleClick} className="btn-primary-full">
                    Salir
                  </Button>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </>
      ) : (
        <>
          <Col>
            <Button className="btn-primary-outline text-uppercase">
              Ingreso
            </Button>
          </Col>
          <Col>
            <Button className="btn-primary-outline text-uppercase">
              Registro
            </Button>
          </Col>
        </>
      )}
    </Col>
  )
}
