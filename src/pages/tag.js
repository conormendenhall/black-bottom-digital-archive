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
      </section>
      <Footer />
    </Layout>
  )
}

export default TagPage
