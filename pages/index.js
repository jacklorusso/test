import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import styled, { injectGlobal } from 'styled-components'

import { colors, scale } from '../components/foundation'

injectGlobal`
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		margin: 0;
    padding: ${scale.ms0};
    background: linear-gradient(
      to bottom right,
      ${colors.gradientBlue},
      ${colors.gradientPink});
	}
`;

const ContentArea = styled.div`
  width: 100%;
  height: calc(100vh - ${scale.ms0} - ${scale.ms0});
  background: ${colors.primaryPurple};
`
export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {'name': 'description', 'content': 'Jack Lo Russo: UX Design & Front End Dev'},
          ]}
          link={[
            {rel: 'shortcut icon', href: 'images/logo.png'},
          ]}
        />
        <ContentArea>
        </ContentArea>
      </div>
    )
  }
}
