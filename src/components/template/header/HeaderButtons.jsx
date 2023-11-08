import { useState,  useContext } from 'react'
import { Link } from 'react-router-dom'
import IsLoggedContext from '../../../context/IsLoggedContext'
import { Button, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FooterContact } from '../footer/FooterContact'

//Parte del Login y estado en la barra de usuario
import {UserAuth} from '../../../context/AuthContext'
// sin funcionalidades, da ok iniciar sesion solo con poner un mail y una contraseña que entre en los parametros

export const HeaderButtons = () => {

  // manejo del login y estados
  const {user,logOut}=UserAuth;
  
  // manejo del login y estados


  // const { isLogged, handleIsLogged } = useContext(IsLogedContext)
  // handleIsLogedd no existe
 const [isLogged, setIsLogged] = useState(null)
//  null = no logueado true = si logueado
  const handleClick = () => setIsLogged(!isLogged)
  
  // aca va el nombre del usuario que seria el correo o proximamente el usuario que uno almacene
  // const userName='Usr_DB_Firebase'
  const userName='user?.email'


  return (
    <Col xs={7} md={3} className="avatar-icon">
      {/* { isLogged ? (  */}
      { user?.email ? ( 
        <>
      
          <span>Usuario {userName}</span>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
              alt="user-male-circle--v1"
            />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-false"
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton>
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
                <Link to="/panel-usuario" className="user-menu">
                  Actualizar datos
                </Link>
                <FooterContact text="contacto" />
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
