import React from 'react'
import { YEAR } from '../../../utils/constants'

export const FooterCopyright = () => {
  return (
    <div className="col-sm-12 col-md-7 text-sm-center text-md-start text-lg-end">
      <p className="lh-lg mt-2">
        Copyright &copy; {YEAR} - Todos los derechos reservados
      </p>
    </div>
  )
}
