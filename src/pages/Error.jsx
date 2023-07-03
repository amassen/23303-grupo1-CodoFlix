import React from 'react'
import { HeadlineH2 } from '../components/atom/Headlineh2'
import { Col, Image, Row } from 'react-bootstrap'

export const Error = () => {
  return (
    <div className="fullHeight">
      <Row>
        <Col xs={12} md={5}>
          <Image
            src="./error.jpg"
            fluid
            alt="El personaje de tristeja de Intensamente a punto de llorar"
          />
        </Col>
        <Col xs={12} md={7} className="center-elements px-5 py-5">
          <HeadlineH2 headlineText="AWWW . . . NO LLORES" />
          <p>Es solo un error 400!</p>
          <p>
            Lo que busca puede haberse extraviado en la memoria a largo plazo.
          </p>
          <p>
            Toca nuestro logo o alguna de las opciones del menú de navegación y
            volvés a disfrutar de las películas.
          </p>
        </Col>
      </Row>
    </div>
  )
}
