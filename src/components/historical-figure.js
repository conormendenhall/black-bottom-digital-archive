import React from 'react'

import Layout from './layout'
import Article from './article'

const HistoricalFiguresPage = ({ pageContext }) => {
  const breadcrumb = {
    text: 'View more historical figures',
    href: '/historical-figures',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} />
    </Layout>
  )
}

export default HistoricalFiguresPage
