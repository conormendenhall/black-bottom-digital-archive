import React from 'react'

import Layout from './layout'
import Article from './article'

const InterviewPage = ({ location, pageContext }) => {
  const breadcrumb = {
    text: 'Interviews',
    href: '/interviews',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} location={location} />
    </Layout>
  )
}

export default InterviewPage
