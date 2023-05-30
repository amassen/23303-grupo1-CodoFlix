import React from 'react'
import { YEAR } from '../../../utils/constants'

export const FooterCopyright = () => {
  return (
    <div className="col-sm-12 col-md-8">
      <p className="lh-lg">
        Copyright &copy; {YEAR} - Todos los derechos reservados
      </p>
    </div>
  )
}
