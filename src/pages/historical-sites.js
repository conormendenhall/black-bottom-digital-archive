import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

const HistoricalSitesPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <div key={item.node.id}>
      <a href={`/historical-sites/${item.node.slug}`}>
        <h3>{item.node.title}</h3>
      </a>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">{sites}</section>
      <Footer />
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
