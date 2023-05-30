import { Button } from "react-bootstrap";
export default function BotonOutlineDanger({tipo,texto}) {
  return (
    <>
      <Button variant="btn btn-outline-danger" type={tipo}>{texto}</Button>{' '}
    </>
  );

  
}