import React from 'react'

import Layout from './layout'
import Article from './article'

const InterviewPage = ({ pageContext }) => {
  const breadcrumb = {
    text: 'View more interviews',
    href: '/interviews',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} />
    </Layout>
  )
}

export default InterviewPage
