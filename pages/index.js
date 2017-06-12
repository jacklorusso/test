import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import { colors, scale } from '../components/foundation'

injectGlobal`
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
		margin: 0;
	}
`;

// themes - look into function to switch between
const light = {
	fg: 'black',
	bg: 'white'
};

const dark = {
	fg: 'white',
	bg: 'black'
};

const Title = styled.h1`
	font-weight: 500;
	color: #171717;
`

const Skills = styled.p`
	margin: 0;
	font-size: 14px;
	font-weight: 300;
	color: #90A1B8;
`

const Description = styled.p`
	font-size: 16px;
	font-weight: 300;
	color: #171717;
	margin: 0;

	a {
		color: inherit;
	}
`

const Container = styled.div`
	width: 40%;
	margin: 0 auto;
`

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {'name': 'description', 'content': 'Jack Lo Russo – Designer'},
          ]}
          link={[
            {rel: 'shortcut icon', href: 'images/logo.png'},
          ]}
        />
					<Container>
						<Row>
							<Title>Jack Lo Russo is a product designer based in Sydney.</Title>
							<Skills>UX / UI / Information Architecture / Front-end / Strategy</Skills>
							<Description>
								<p>Striving for balanced control over both form and technology.</p>
							 	<p>I'm comfortable working across UX/UI design, information architecture, and front-end code. I love design systems and get unreasonably excited about composing modular, extensible and easily maintained interfaces.
								he design challenges that the blockchain, cryptoeconomics and virtual reality bring to the table.</p>
								<p>I’m current working as a Design Technologist at Digivizer, but you can take a peek at my <a href='#'>resumé</a>.</p>
							</Description>
						</Row>
					</Container>
			</div>
    )
  }
}
