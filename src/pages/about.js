import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Description from '../components/description'
import Team from '../components/team'
import Contact from '../components/contact'

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
    </Layout>
  )
}

export default AboutPage
