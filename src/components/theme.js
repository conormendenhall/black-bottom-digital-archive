import React from 'react'

import Layout from './layout'
import Article from './article'
import Card from './card'

const ThemePage = ({ location, pageContext }) => {
  let historicalSites = pageContext.historicalSites?.map((item, key) => (
    <Card url="/historical-sites/" data={item} key={key} />
  ))

  let historicalFigures = pageContext.historicalFigures?.map((item, key) => (
    <Card url="/historical-figures/" data={item} key={key} />
  ))

  let interviews = pageContext.interviews?.map((item, key) => (
    <Card url="/interviews/" data={item} key={key} />
  ))

  const breadcrumb = {
    text: 'Themes',
    href: '/themes',
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb} location={location}>
        <div className="card-gallery">
          {historicalFigures}
          {historicalSites}
          {interviews}
        </div>
      </Article>
    </Layout>
  )
}

export default ThemePage
