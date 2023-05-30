import { Button } from "react-bootstrap"
export default function BotonSuccess({tipo,texto}) {
  return (
    <>
       <Button variant="btn btn-success" type={tipo}>{texto}</Button>{' '}
    </>
  )
}
