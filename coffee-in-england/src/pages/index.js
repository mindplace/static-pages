import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../utils/lodash.min.js'

import Header from './index/header/header'
import Navigation from './index/navigation/navigation'
import Essay from './index/essay/essay'
import Bibliography from './index/bibliography/bibliography'

import './index/index.css'

const EssayPage = ({ data }) => {
  return (
    <main>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
          { name: 'charset', content: 'utf-8'}
        ]}
        />

      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation />

        <Essay />
        <Bibliography data={data}/>
      </div>
    </main>
  )
}

export default EssayPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
