import React from 'react'

import Layout from './layout'
import Article from './article'

const EventPage = ({ pageContext }) => {
  const breadcrumb = {
    text: 'Events',
    href: '/about',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} />
    </Layout>
  )
}

export default EventPage
