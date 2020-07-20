import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Breadcrumb from './breadcrumb'
import Article from './article'

const EventPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <Article data={pageContext} />
      <section className="container">
        <Breadcrumb text="View more events" href="/about" />
      </section>
    </Layout>
  )
}

export default EventPage
