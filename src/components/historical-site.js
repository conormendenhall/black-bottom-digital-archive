import React from 'react'

import Layout from './layout'
import Article from './article'

const HistoricalSitePage = ({ location, pageContext }) => {
  const breadcrumb = {
    text: 'Historical Sites',
    href: '/historical-sites',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} location={location} />
    </Layout>
  )
}

export default HistoricalSitePage
