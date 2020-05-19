import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

const TagPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Tag" />
      <section className="container">
        <div className="tag-site">
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
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default TagPage
