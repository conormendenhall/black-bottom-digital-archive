import React from 'react'

import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Article from './article'
import Card from './card'

const ThemePage = ({ pageContext }) => {
  let historicalSites = pageContext.historicalSites.map((item, key) => (
    <a key={key} href={`/historical-sites/${item.slug}`}>
      <Card data={item} />
    </a>
  ))
  let historicalFigures = pageContext.historicalFigures.map((item, key) => (
    <a key={key} href={`/historical-figures/${item.slug}`}>
      <Card data={item} />
    </a>
  ))
  let interviews = pageContext.interviews.map((item, key) => (
    <a key={key} href={`/interviews/${item.slug}`}>
      <Card data={item} />
    </a>
  ))
  return (
    <Layout>
      <Article data={pageContext}>
        <div className="card-gallery">
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
