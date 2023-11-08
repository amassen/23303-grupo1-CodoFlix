import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { HeaderLogo } from './HeaderLogo'
import { HeaderButtons } from './HeaderButtons'
import './Header.css'

// estos es el NAV
export const Header = () => {
  return (
    <header>
      <Navbar expand={false} className="my-2">
        <Container>
          
          {/* El texto codoflix con el a para ir a la pagina principal */}
          <HeaderLogo />
          {/* El texto codoflix con el a para ir a la pagina principal */}
          
          {/* Aca iria el boton de ingreso registro o el usuario logueado */}
          <HeaderButtons />
          {/* Aca iria el boton de ingreso registro o el usuario logueado */}


        </Container>
      </Navbar>
    </header>
  )
}
