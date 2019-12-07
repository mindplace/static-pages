import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className='header-section'>
      <h1>'A loathsome Potion . . . Syrrop of Soot, or Effence of old Shooes'</h1>
      <h2>Early coffee consumption in England, 1652 – 1674</h2>
    </div>

    <div>
      <img src={ require('../images/coffee-broadside.jpg') } alt="A Broad-side of 1672" />
      <span className="italic center">
        <Link to="http://cluesheet.com/All-About-Coffee-X.htm" target='_blank'>A Broad-side of 1672.</Link>
      </span>
    </div>
  </div>
)

export default Header
