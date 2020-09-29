import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const ThemesPage = ({ data }) => {
  let themes = data.themes.edges.map((item, key) => (
    <Card url="/themes/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <SEO title="Themes" />
      <section className="container">
        <h1>Themes</h1>
        <p>
          We know that there are narrative threads that run throughout Black
          Bottom history, from Black entrepreneurship and community to white
          supremacy and anti-Black police violence. This section includes some
          groupings of entries as related to themes.
        </p>
        <div id="themes" className="card-gallery">
          {themes}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    themes: allContentfulTheme {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default ThemesPage
