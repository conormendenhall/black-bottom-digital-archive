import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HistoricalSitesPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <div key={item.node.id} className="entry-link">
      <a href={`/historical-sites/${item.node.slug}`}>
        <span>{item.node.title}</span>
      </a>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">
        <h1>Historical Sites</h1>
        {sites}
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
