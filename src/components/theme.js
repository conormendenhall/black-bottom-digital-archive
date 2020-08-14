import React from 'react'

import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Article from './article'
import Card from './card'

const ThemePage = ({ pageContext }) => {
  let historicalSites = pageContext.historicalSites?.map((item, key) => (
    <Card url="/historical-sites/" data={item} />
  ))
  let historicalFigures = pageContext.historicalFigures?.map((item, key) => (
    <Card url="/historical-figures/" data={item} />
  ))
  let interviews = pageContext.interviews?.map((item, key) => (
    <Card url="/interviews/" data={item} />
  ))
  return (
    <Layout>
      <Article data={pageContext}>
        <div className="mini-card-gallery">
          {historicalFigures}
          {historicalSites}
          {interviews}
        </div>
      </Article>
      <section className="container">
        <Breadcrumb text="View more themes" href="/themes" />
      </section>
    </Layout>
  )
}

export default ThemePage
