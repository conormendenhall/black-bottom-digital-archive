import React from 'react'

import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Article from './article'

const HistoricalSitePage = ({ pageContext }) => {
  return (
    <Layout>
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
