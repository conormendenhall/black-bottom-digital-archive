import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Description from '../components/description'
import Team from '../components/team'
import Contact from '../components/contact'
import News from '../components/news'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="container">
        <Description />
        <Team />
        <Contact />
        <News />
      </section>
      <Footer />
    </Layout>
  )
}

export default AboutPage
