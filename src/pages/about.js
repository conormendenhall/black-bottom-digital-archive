import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Description from '../components/description'
import Team from '../components/team'
import Contact from '../components/contact'
import Events from '../components/events'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Black Bottom Archives" />
      <section className="container">
        <Description />
        <Team />
      </section>
      <Contact />
      <section className="container">
        <Events />
      </section>
    </Layout>
  )
}

export default AboutPage
