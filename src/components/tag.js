import React from 'react'

import Layout from './layout'
import Head from './head'
import Card from './card'

const TagPage = ({ pageContext }) => {
  return (
    <Layout>
      <Head title={pageContext.title} />
      <section className="container">
        <h1>Tag: {pageContext.title}</h1>
        {pageContext.historical_figure && <h3>Historical Figures</h3>}
        <div className="card-gallery">
          {pageContext.historical_figure?.map((figure, key) => {
            return <Card url={`/historical-figures/`} data={figure} key={key} />
          })}
        </div>
        {pageContext.historical_site && <h3>Historical Sites</h3>}
        <div className="card-gallery">
          {pageContext.historical_site?.map((site, key) => {
            return <Card url={`/historical-sites/`} data={site} key={key} />
          })}
        </div>
        {pageContext.interview && <h3>Oral Histories</h3>}
        <div className="card-gallery">
          {pageContext.interview?.map((interview, key) => {
            return <Card url={`/oral-histories/`} data={interview} key={key} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default TagPage
