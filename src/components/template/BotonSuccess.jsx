import { Button } from "react-bootstrap"
export default function BotonSuccess({tipo,texto,enClick}) {
  return (
    <>
       <Button variant="btn btn-success" type={tipo} onClick={enClick}>{texto}</Button>{' '}
    </>
  )
}
