import React from 'react'

import Layout from './layout'
import Article from './article'

const EventPage = ({ location, pageContext }) => {
  const breadcrumb = {
    text: 'Events',
    href: '/about',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} location={location} />
    </Layout>
  )
}

export default EventPage
