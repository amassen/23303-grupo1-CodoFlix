import React from 'react'
import { Row } from 'react-bootstrap'

/*
 * Componente reutlizable para titulos H1
 * Por default tiene:
 * - un padding en en eje Y de 3, se puede modificar por prop con 'paddingY',
 * posibles valores: '1', '2', '4', '5'
 * - está alineado en el medio('center'), se puede modificar con la prop 'textAlign',
 * posibles valores: 'start', 'end'. Tambien se puede modificar acorde a los
 * breakpoints: https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment,
 * ejemplo: text-sm-start
 * Se agrega el parametro customClass para cualquier cambio extra que se le quiera
 * hacer al texto se haga mediante las clases de Bootstrap y se agregue
 * al final de la clase
 */

export const HeadlineH1 = ({
  headlineText,
  paddingY,
  textAlign,
  customClass
}) => {
  const STYLE = `py-${paddingY ? paddingY : '3'} text-${
    textAlign ? textAlign : 'center'
  } ${customClass ? customClass : ''}`

  return (
    <Row>
      <h1 className={STYLE}>{headlineText}</h1>
    </Row>
  )
}
