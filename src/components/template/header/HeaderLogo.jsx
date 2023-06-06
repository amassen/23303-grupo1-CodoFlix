import { Col, Navbar } from 'react-bootstrap'

export const HeaderLogo = () => {
  return (
    <Col xs={12} md={9} className="pb-3">
      <Navbar.Brand href="/">CodoFlix</Navbar.Brand>
    </Col>
  )
}