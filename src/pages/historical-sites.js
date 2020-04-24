import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import HistoricalSites from '../components/historical-sites'

const HistoricalSitesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">
        <HistoricalSites data={data} />
      </section>
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
          abstract {
            id
            abstract
          }
        }
      }
    }
  }
`

export default HistoricalSitesPage
