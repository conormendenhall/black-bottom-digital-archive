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
      <div className="index-header">
        <section className="container">
          <h1>Historical Figures</h1>
          <p>
            These are some key historical figures from Black Bottom and Paradise
            Valley history — successful entrepreneurs, civil rights activists,
            and community leaders.
          </p>
        </section>
      </div>
      <div className="card-gallery-container">
        <section className="container">
          <div id="historicalFigures" className="card-gallery">
            {figures}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    figures: allContentfulHistoricalFigure(
      sort: { order: ASC, fields: title }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default HistoricalFiguresPage
