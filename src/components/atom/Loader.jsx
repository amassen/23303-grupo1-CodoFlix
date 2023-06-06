import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import './Loader.css'

/* Loader que recibe como props:
 * - animation: si no la recibe como prop por default es 'border',
 * el otro valor que puede recibir es 'grow'
 * - variant: si no recibe como prop por default es 'warning',
 * valores posibles: 'primary', 'secondary', 'sucess', 'danger',
 * 'info', 'light', 'dark'
 * - textHidden: el texto que ayuda en la accesibilidad, por default es 'Cargando...'
 * - text: el texto que se vera junto al spinner
 */
const Loader = ({ animation, variant, textHidden, text }) => {
  return (
    <section className="loader-container">
      <div className="loader">
        <div>
          <Spinner
            animation={animation ? animation : 'border'}
            role="status"
            variant={variant ? variant : 'warning'}
          >
            <span className="visually-hidden">
              {textHidden ? textHidden : 'Cargando...'}
            </span>
          </Spinner>
        </div>
        <div className="col-sm-12 text-center" >{text ? text : ''}</div>
      </div>
    </section>
  )
}

export default Loader
