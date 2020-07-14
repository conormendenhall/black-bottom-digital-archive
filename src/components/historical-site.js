import React from 'react'

import Img from 'gatsby-image'

import Layout from './layout'
import SEO from './seo'
import EntryTags from './entry-tags'
import Breadcrumb from './breadcrumb'

const HistoricalSitePage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Historical Site" />
      <section className="container">
        <Breadcrumb
          text="View more historical sites"
          href="/historical-sites"
        />
        <div className="historical-site">
          {pageContext.historicalSiteImage && (
            <Img fluid={pageContext.historicalSiteImage.fluid} className="article-image" />
          )}
          <h1>{pageContext.title}</h1>
          <p>{pageContext.abstract?.abstract}</p>
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

export default HistoricalSitePage
