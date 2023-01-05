import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Card from '../components/card'

const HistoricalSitesPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <Card url="/historical-sites/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <Head title="Historical Sites" />
      <div className="index-header">
        <section className="container">
          <h1>Historical Sites</h1>
          <p>
            Though Black Bottom and Paradise Valley are long gone, memories and
            some key sites still remain. These are some of the key locations
            that existed — some are still around in one form or another, but
            others were demolished.
          </p>
        </section>
      </div>
      <div className="card-gallery-container">
        <section className="container">
          <div id="historicalSites" className="card-gallery">
            {sites}
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
                Submit Media /<br /> Photos / Artifacts
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
    sites: allContentfulHistoricalSite(sort: { order: ASC, fields: title }) {
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
