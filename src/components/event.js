import React from 'react'

import Img from 'gatsby-image'

import Layout from './layout'
import SEO from './seo'
import EntryTags from './entry-tags'
import Breadcrumb from './breadcrumb'

const EventPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section className="container">
        <Breadcrumb text="View more events" href="/about" />
        <div className="event">
          <h1>{pageContext.title}</h1>
          {pageContext.eventImage && (
            <Img
              fluid={pageContext.eventImage.fluid}
              className="article-image"
            />
          )}
          <p>{pageContext.description.description}</p>
        </div>
      </section>
      {pageContext.tags && (
        <section className="container">
          <h3>Tags</h3>
          <EntryTags data={pageContext.tags}></EntryTags>
        </section>
      )}
    </Layout>
  )
}

export default EventPage
