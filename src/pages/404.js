import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFoundPage = () => (
  <Layout>
    <section className="container">
      <Head title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </section>
  </Layout>
)

export default NotFoundPage
