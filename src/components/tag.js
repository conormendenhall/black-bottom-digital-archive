import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Breadcrumb from './breadcrumb'
import MiniCard from './mini-card'

const TagPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section className="container">
        <h1>Tag: {pageContext.title}</h1>
        {pageContext.historical_site && <h3>Historical Sites</h3>}
        <div className="mini-card-section">
          {pageContext.historical_site?.map(site => {
            return <MiniCard url={`/historical-sites/`} data={site} />
          })}
        </div>
        {pageContext.interview && <h3>Interviews</h3>}
        <div className="mini-card-section">
          {pageContext.interview?.map(interview => {
            return <MiniCard url={`/interviews/`} data={interview} />
          })}
        </div>
        {pageContext.event && <h3>Events</h3>}
        <div className="mini-card-section">
          {pageContext.event?.map(event => {
            return <MiniCard url={`/events/`} data={event} />
          })}
        </div>
        <Breadcrumb text="View more tags" href="/tags" />
      </section>
    </Layout>
  )
}

export default TagPage
