import { Button } from "react-bootstrap"
export default function BotonSuccess({tipo,texto}) {
  return (
    <>
       <Button variant="success w-25" type={tipo}>{texto}</Button>{' '}
    </>
  )
}
