import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import HistoricalMap from '../components/historical-map'

const HistoricalMapPage = () => {
  return (
    <Layout>
      <Head title="Historical Map of Black Bottom Detroit" />
      <section className="container">
        <h1>Historical Map of Black Bottom, Detroit</h1>
        <div className="rich-text">
          <p>
            <i>
              Compiled in 2018 from Sanborn Fire Insurance Maps
              <br />
              Sourced from the Library of Congress
              <br />
              Sanborn Map Company, Vol. 4, 1922 - Nov 1951
              <br />
              Black Bottom Street View / Black Bottom Archives
            </i>
          </p>
          <p>
            Black Bottom was the center of Black life in Detroit, beginning in
            the early 1900's and continuing through the Great Migration, when
            Black people moved to the city in large numbers from the American
            South. From the 1950's to the 1970's, the City of Detroit completely
            demolished the neighborhood in the name of "urban renewal." Hastings
            Street, which once held the largest concentration of Black-owned
            institutions and businesses in the city — as well as places that
            supported its internationally renowned music culture — was
            demolished to build the Chrysler Freeway.
          </p>
          <p>
            This map shows Black Bottom as it stood in 1951, right before the
            first phase of demolition began.
          </p>
        </div>
        <h4>(Click for high-resolution image)</h4>
        <a href="/200518_Sanborn Stitch_web_8000px.jpg" target="_blank">
          <HistoricalMap />
        </a>
      </section>
    </Layout>
  )
}

export default HistoricalMapPage
