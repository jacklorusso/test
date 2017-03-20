import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

// import Footer from '../components/footer.js'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Jack Lo Russo: UX Design & Front End Dev"},
          ]}
          link={[
            {rel: "shortcut icon", href: "images/logo.png"},
          ]}
        />
        Coming soon
        {/* <Footer /> */}
      </div>
    )
  }
}
