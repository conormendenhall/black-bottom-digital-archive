import React from 'react'

import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Article from './article'

const InterviewPage = ({ pageContext }) => {
  return (
    <Layout>
      <Article data={pageContext} />
      <section className="container">
        <Breadcrumb text="View more interviews" href="/interviews" />
      </section>
    </Layout>
  )
}

export default InterviewPage
