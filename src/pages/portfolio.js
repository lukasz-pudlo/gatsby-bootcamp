import React from 'react'

import Layout from '../components/layout'

import { graphql, useStaticQuery } from "gatsby"

const PortfolioPage = () => {
    
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

	return (
		<Layout>
          <h1>Portfolio</h1>
		  <ol>
            {
              data.allMarkdownRemark.edges.map((edge)=> {
                return (
                  <li>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                  </li>
				)     
			  })  
			}  
          </ol>
		</Layout>
	);
}

export default PortfolioPage