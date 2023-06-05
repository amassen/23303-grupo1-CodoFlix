import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { HeaderLogo } from './HeaderLogo'
import { HeaderButtons } from './HeaderButtons'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <Navbar expand={false} className="my-2">
        <Container>
          <HeaderLogo />
          <HeaderButtons />
        </Container>
      </Navbar>
    </header>
  )
}
