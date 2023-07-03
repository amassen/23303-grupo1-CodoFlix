import React from 'react'
import { FooterLogo } from './FooterLogo'
import { FooterContact } from './FooterContact'
import { FooterCopyright } from './FooterCopyright'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container-lg py-3">
        <div className="row">
          <FooterLogo text="CodoFlix" />
          <FooterContact text="contacto" />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}
