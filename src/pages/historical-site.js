import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

const HistoricalSitePage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Historical Site" />
      <section className="container">
        <div className="historical-site">
          <h1>{pageContext.title}</h1>
          <p>{pageContext.abstract.abstract}</p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default HistoricalSitePage
