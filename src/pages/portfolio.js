import React from 'react'

import Layout from '../components/layout'

import { graphql, useStaticQuery } from "gatsby"

const PortfolioPage = () => {
  render () {
    const data = useStaticQuery(graphql`
	  query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
        }
      }
    }
  }
}
	`)
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

	return (
		<Layout>
		  <ol>
            {listItems}
          </ol>
		</Layout>
	);
  }
}

export default PortfolioPage