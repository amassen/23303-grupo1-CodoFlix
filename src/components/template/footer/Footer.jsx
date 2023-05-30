import React from 'react'
import { FooterLogo } from './FooterLogo'
import { FooterContact } from './FooterContact'
import { FooterCopyright } from './FooterCopyright'

export const Footer = () => {
  return (
    <footer>
      <div className="container-lg text-sm-center text-md-start text-lg-end py-2">
        <div className="row">
          <FooterLogo text="CodoFlix" />
          <FooterContact text="contacto" />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}
