import React from 'react'
import Link from 'gatsby-link'

import './citation.css'

const Citation = ({ citation }) => {
  if (citation === undefined) { return '' }
  const titleClasses = 'title ' + citation.titleType

  return (
    <div className="citation">
      <div className="printed">{ citation.printed }</div>
      <div className={ titleClasses }>{ citation.title }</div>
      <div className="author">{ citation.autor }</div>
      <div className="accessed">{ citation.accessed }</div>
    </div>
  )
}

export default Citation
