import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Card from '../components/card'
import HistoricalMap from '../components/historical-map'

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
            Black Bottom was the center of Black life in Detroit, beginning in
            the early 1900's and continuing through the Great Migration, when
            Black people moved to the city in large numbers from the American
            South. From the 1950's to the 1970's, the City of Detroit completely
            demolished the neighborhood in the name of "urban renewal."
          </p>
          <p>
            Hastings Street, which once held the largest concentration of
            Black-owned institutions and businesses in the city — as well as
            places that supported its internationally renowned music culture —
            was demolished to build the Chrysler Freeway.
          </p>
          <p>
            The Black Bottom Historical map shows Black Bottom as it stood in
            1951, right before the first phase of demolition began.
          </p>
        </section>
      </div>
      <section className="container">
        <em>(Click the image to view it in high resolution.)</em>
        <a href="/200518_Sanborn Stitch_web_8000px.jpg" target="_blank">
          <HistoricalMap />
        </a>
        <em className="map-source">
          Compiled in 2018 from Sanborn Fire Insurance Maps
          <br />
          Sourced from the Library of Congress
          <br />
          Sanborn Map Company, Vol. 4, 1922 - Nov 1951
          <br />
          Black Bottom Street View / Black Bottom Archives
        </em>
      </section>
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
    sites: allContentfulHistoricalSite(sort: { title: ASC }) {
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

export default HistoricalSitesPage
