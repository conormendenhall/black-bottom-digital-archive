import React from 'react'

import Layout from './layout'
import Article from './article'

const HistoricalSitePage = ({ pageContext }) => {
  const breadcrumb = {
    text: 'Historical Sites',
    href: '/historical-sites',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} />
    </Layout>
  )
}

export default HistoricalSitePage
