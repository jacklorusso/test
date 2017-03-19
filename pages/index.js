import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Hello World!
        </h1>
        <p>Welcome to your new clean Gatsby site</p>
      </div>
    )
  }
}
