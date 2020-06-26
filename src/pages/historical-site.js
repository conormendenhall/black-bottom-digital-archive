import React from 'react'

import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import EntryTags from '../components/entry-tags'
import Breadcrumb from '../components/breadcrumb'

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
            <Img fluid={pageContext.historicalSiteImage.fluid} />
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
      <Footer />
    </Layout>
  )
}

export default HistoricalSitePage
