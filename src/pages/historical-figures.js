import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Card from '../components/card'

const HistoricalFiguresPage = ({ data }) => {
  let figures = data.figures.edges.map((item, key) => (
    <Card url="/historical-figures/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <Head title="Historical Figures" />
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
      <div>
        <section className="container">
          <h2>Share your story.</h2>
          <p>
            Did you or your family members live, work, or play in Black Bottom?
            Do you have stories, photos or other media to share? Learn more
            about contributing your history to Black Bottom Archives.
          </p>
          <div className="button-section">
            <a href="https://google.com">
              <div className="button">
                Submit a<br /> Historical Figure
              </div>
            </a>
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
          brief
        }
      }
    }
  }
`

export default HistoricalFiguresPage
