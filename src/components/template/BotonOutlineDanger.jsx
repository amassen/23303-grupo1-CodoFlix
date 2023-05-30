import { Button } from "react-bootstrap";
export default function BotonOutlineDanger({tipo,texto}) {
  return (
    <>
      <Button variant="outline-danger w-25" type={tipo}>{texto}</Button>{' '}
    </>
  );

  
}