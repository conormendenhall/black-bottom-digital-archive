import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const HistoricalFiguresPage = ({ data }) => {
  let figures = data.figures.edges.map((item, key) => (
    <a key={key} href={`/historical-figures/${item.node.slug}`}>
      <Card data={item.node} />
    </a>
  ))

  return (
    <Layout>
      <SEO title="Historical Figures" />
      <section className="container">
        <h1>Historical Figures</h1>
        <p>
          Historical Figures description here. Describe the project. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div id="historicalFigures" className="mini-card-gallery">
          {figures}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    figures: allContentfulHistoricalFigure {
      edges {
        node {
          id
          title
          slug
          image {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`

export default HistoricalFiguresPage
