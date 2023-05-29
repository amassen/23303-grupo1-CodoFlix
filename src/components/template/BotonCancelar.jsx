import Button from 'react-bootstrap/Button';
export default function BotonCancelar(tipo) {
  return (
    <>
      <Button variant="outline-danger w-25" type={tipo}>Cancelar</Button>{' '}
    </>
  );

  
}