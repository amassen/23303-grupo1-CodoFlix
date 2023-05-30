import React from 'react'
import { ReactComponent as Envelope } from '../../../assets/envelope-fill.svg'

export const FooterContact = ({ text }) => {
  return (
    <div className="col-sm-12 col-md-2">
      <p className="lh-lg text-uppercase">
        <Envelope style={{marginRight: '6px'}}/>
        {text}
      </p>
    </div>
  )
}
