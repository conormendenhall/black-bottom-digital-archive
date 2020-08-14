import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Card from './card'

const TagPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section className="container">
        <h1>Tag: {pageContext.title}</h1>
        {pageContext.theme && <h3>Themes</h3>}
        <div className="mini-card-gallery">
          {pageContext.theme?.map(theme => {
            return <Card url={`/themes/`} data={theme} />
          })}
        </div>
        {pageContext.historical_figure && <h3>Historical Figures</h3>}
        <div className="mini-card-gallery">
          {pageContext.historical_figure?.map(site => {
            return <Card url={`/historical-figures/`} data={site} />
          })}
        </div>
        {pageContext.historical_site && <h3>Historical Sites</h3>}
        <div className="mini-card-gallery">
          {pageContext.historical_site?.map(site => {
            return <Card url={`/historical-sites/`} data={site} />
          })}
        </div>
        {pageContext.interview && <h3>Oral Histories</h3>}
        <div className="mini-card-gallery">
          {pageContext.interview?.map(interview => {
            return <Card url={`/interviews/`} data={interview} />
          })}
        </div>
        {pageContext.event && <h3>Events</h3>}
        <div className="mini-card-gallery">
          {pageContext.event?.map(event => {
            return <Card url={`/events/`} data={event} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default TagPage
