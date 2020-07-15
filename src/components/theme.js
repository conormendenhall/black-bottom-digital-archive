import React from 'react'

import Layout from './layout'
import SEO from './seo'
import Breadcrumb from './breadcrumb'
import Article from './article'

const ThemePage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <Article data={pageContext} />
      <section className="container">
        <Breadcrumb text="View more themes" href="/themes" />
      </section>
    </Layout>
  )
}

export default ThemePage
