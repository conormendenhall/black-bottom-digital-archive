import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Interview from '../components/interview'

const InterviewsPage = () => {
  return (
    <Layout>
      <SEO title="Interviews" />
      <section className="container">
        <Interview />
      </section>
      <Footer />
    </Layout>
  )
}

export default InterviewsPage
