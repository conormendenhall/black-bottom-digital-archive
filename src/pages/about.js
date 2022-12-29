import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Description from '../components/description'
import Team from '../components/team'
import Contact from '../components/contact'
import Events from '../components/events'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Black Bottom Archives" />
      <section className="container">
        <Description />
      </section>
      <section className="container">
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
