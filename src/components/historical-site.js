import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Breadcrumb from './breadcrumb'
import Article from './article'

const HistoricalSitePage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Historical Site" />
      <Article data={pageContext} />
      <section className="container">
        <Breadcrumb
          text="View more historical sites"
          href="/historical-sites"
        />
      </section>
    </Layout>
  )
}

export default HistoricalSitePage
