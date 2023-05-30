import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLogo = ({ text }) => {
  return (
    <div className="col-sm-12 col-md-2">
      <p className="fs-4">
        <Link to="/" className="text-decoration-none link-light">
          {text}
        </Link>
      </p>
    </div>
  )
}
