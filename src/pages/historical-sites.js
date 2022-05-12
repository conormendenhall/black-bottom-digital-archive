import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const HistoricalSitesPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <Card url="/historical-sites/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">
        <h1>Historical Sites</h1>
        <p>
          Though Black Bottom and Paradise Valley are long gone, memories and
          some key sites still remain. These are some of the key locations that
          existed — some are still around in one form or another, but others
          were demolished.
        </p>
      </section>
      <section className="container card-gallery-container">
        <div id="historicalSites" className="card-gallery">
          {sites}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    sites: allContentfulHistoricalSite(sort: {order: ASC, fields: title}) {
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

export default HistoricalSitesPage
