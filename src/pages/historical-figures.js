import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const HistoricalFiguresPage = ({ data }) => {
  let figures = data.figures.edges.map((item, key) => (
    <Card url="/historical-figures/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <SEO title="Historical Figures" />
      <section className="container">
        <h1>Historical Figures</h1>
        <p>
          These are some key historical figures from Black Bottom and Paradise
          Valley history — successful entrepreneurs, civil rights activists, and
          community leaders.
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
