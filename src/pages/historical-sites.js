import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const HistoricalSitesPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <a key={item.node.id} href={`/historical-sites/${item.node.slug}`}>
      <Card data={item} />
    </a>
  ))

  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">
        <h1>Historical Sites</h1>
        <div id="historicalSites" className="card-gallery">
          {sites}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    sites: allContentfulHistoricalSite {
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
