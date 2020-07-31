import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const HistoricalFiguresPage = ({ data }) => {
  let figures = data.figures.edges.map((item, key) => (
    <a key={key} href={`/historical-figures/${item.node.slug}`}>
      <Card data={item} />
    </a>
  ))

  return (
    <Layout>
      <SEO title="Historical Figures" />
      <section className="container">
        <h1>Historical figures</h1>
        <div id="historicalFigures" className="card-gallery">
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