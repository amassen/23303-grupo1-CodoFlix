import { Col, Navbar } from 'react-bootstrap'

export const HeaderLogo = () => {
  return (
    <Col xs={5} md={9}>
      {/* fs-1 para un tamaño grande de texto */}
      <Navbar.Brand className='fs-1' href="/">CodoFlix</Navbar.Brand>
    </Col>
  )
}
