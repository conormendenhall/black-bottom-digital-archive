import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HistoricalMap from '../components/historical-map'

const HistoricalMapPage = () => {
  return (
    <Layout>
      <SEO title="Historical Map of Black Bottom Detroit" />
      <section className="container">
        <h1>Historical Map of Black Bottom, Detroit</h1>
        <a href="/200518_Sanborn Stitch_web_8000px.jpg" target="_blank">
          <HistoricalMap />
        </a>
      </section>
    </Layout>
  )
}

export default HistoricalMapPage
