import React from 'react'

import Layout from './layout'
import Article from './article'

const HistoricalFiguresPage = ({ location, pageContext }) => {
  const breadcrumb = {
    text: 'Historical Figures',
    href: '/historical-figures',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} location={location} />
    </Layout>
  )
}

export default HistoricalFiguresPage
