import { Button } from 'react-bootstrap'

/* Botón primary */
/* Clasebtn recibe las clases css, tipo recibe el atributo type,
  text recibe la layenda del botón, enCLick recibe una función que se
  ejecuta al hacer onCLick
**El css de estilo en caso de no setear clases de bootstrap es btncolors.css
**Al pasar por props clase/s personalizadas poner un espacio antes de las
  clases pasadas; por ej:   
    <BotonPrimary type={tipo} 
                  clasebtn={" btn-ok"}
                  texto="Aceptar" 
                  onClick={handleSubmit}
    />
  */
export default function BotonPrimary({ clasebtn, tipo, texto, onClick }) {
  return (
    <>
      <Button
        variant={`btn btn-primary${clasebtn}`}
        type={tipo}
        onClick={onClick}
      >
        {texto}
      </Button>{' '}
    </>
  )
}
