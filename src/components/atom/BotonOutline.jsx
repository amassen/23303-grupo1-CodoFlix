import { Button } from "react-bootstrap";

/* Botón outline */
/* Clasebtn recibe las clases css, tipo recibe el atributo type,
  text recibe la layenda del botón, enCLick recibe una función que se
  ejecuta al hacer onCLick.
**El css de estilo en caso de no setear clases de bootstrap es btncolors.css
**Al pasar por props clase/s personalizadas poner un espacio antes de las
  clases pasadas; por ej:   
    <BotonPrimary type={tipo} 
                  clasebtn={" btn-ok"}
                  texto="Aceptar" 
                  enClick={handleSubmit}
    />
*/

export default function BotonOutline({clasebtn, tipo,texto, enClick}) {
  return (
    <>
      <Button variant={`btn btn-outline${clasebtn}`} type={tipo} onClick={enClick}>{texto}</Button>{' '}
    </>
  );

  
}