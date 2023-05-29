import Button from 'react-bootstrap/Button';

export default function BotonAceptar(tipo) {
  return (
    <>
       <Button variant="success w-25" type={tipo}>Aceptar</Button>{' '}
    </>
  )
}
