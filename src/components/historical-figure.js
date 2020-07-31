import React from 'react'

import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Article from './article'

const HistoricalFiguresPage = ({ pageContext }) => {
  return (
    <Layout>
      <Article data={pageContext} />
      <section className="container">
        <Breadcrumb
          text="View more historical figures"
          href="/historical-figures"
        />
      </section>
    </Layout>
  )
}

export default HistoricalFiguresPage
