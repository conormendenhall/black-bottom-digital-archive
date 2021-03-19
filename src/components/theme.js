import React from 'react'

import Layout from './layout'
import Article from './article'
import Card from './card'

const ThemePage = ({ pageContext }) => {
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
    text: "View more themes",
    href:"/themes"
  }

  return (
    <Layout>
      <Article data={pageContext} breadcrumb={breadcrumb}>
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
