import React from 'react'

import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EntryTags from '../components/entry-tags'
import Breadcrumb from '../components/breadcrumb'

const EventPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section className="container">
        <Breadcrumb text="View more events" href="/about" />
        <div className="event">
          {pageContext.eventImage && (
            <Img
              fluid={pageContext.eventImage.fluid}
              className="article-image"
            />
          )}
          <h1>{pageContext.title}</h1>
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
