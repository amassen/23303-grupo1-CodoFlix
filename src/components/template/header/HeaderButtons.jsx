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
    <Col xs={12} md={3}>
      {auth ? (
        <>
          <span>usuario</span>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false"> 
          <img width="50" height="50" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-false"
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                Usuario
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="user-menu">
                  Home
                </Link>
                <Link to="/panel-usuario-favoritos" className="user-menu">
                  Favoritos
                </Link>
                <Link to="/panel-usuario-datos" className="user-menu">
                  Actualizar datos
                </Link>
                <Link to="/">
                  <Button
                    onClick={handleClick}
                    className="text-uppercase user-menu-btn"
                  >
                    Salir
                  </Button>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </>
      ) : (
        <Col>
          <Link to="/login-registrarse">
            <Button className="text-uppercase btn-primary-outline">
              Ingreso / Registro
            </Button>
          </Link>
        </Col>
      )}
    </Col>
  )
}
