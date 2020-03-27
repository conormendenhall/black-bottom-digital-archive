import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Media from '../components/media'

const MediaPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Media" />
      <section className="container">
        <Media />
      </section>
      <Footer />
    </Layout>
  )
}

export default MediaPage
