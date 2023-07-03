import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLogo = ({ text }) => {
  return (
    <div className="col-sm-12 col-md-2 text-sm-center text-md-start">
      <p className="fs-4 mt-1">
        <Link to="/" className="text-decoration-none link-light">
          {text}
        </Link>
      </p>
    </div>
  )
}
