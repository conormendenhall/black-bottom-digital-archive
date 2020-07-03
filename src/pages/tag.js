import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Breadcrumb from '../components/breadcrumb'

const TagPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Tag" />
      <section className="container">
        <Breadcrumb text="View more tags" href="/tags" />
        <h1>Tag: {pageContext.name}</h1>
        {pageContext.historical_site && <h3>Historical Sites</h3>}
        {pageContext.historical_site?.map(site => {
          return (
            <div className="entry-link">
              <a href={`/historical-sites/${site.slug}`} className="link">
                <span key={site.id}>{site.title}</span>
              </a>
            </div>
          )
        })}
        {pageContext.interview && <h3>Interviews</h3>}
        {pageContext.interview?.map(interview => {
          return (
            <div className="entry-link">
              <span key={interview.id}>{interview.title}</span>
            </div>
          )
        })}
        {pageContext.event && <h3>Events</h3>}
        {pageContext.event?.map(event => {
          return (
            <div className="entry-link">
              <span key={event.id}>{event.title}</span>
            </div>
          )
        })}
        {pageContext.place && <h3>Places</h3>}
        {pageContext.place?.map(place => {
          return (
            <div className="entry-link">
              <span key={place.id}>{place.name}</span>
            </div>
          )
        })}
      </section>
      <Footer />
    </Layout>
  )
}

export default TagPage
