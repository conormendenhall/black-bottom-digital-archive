import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const ThemesPage = ({ data }) => {
  let themes = data.themes.edges.map((item, key) => (
    <a key={key} href={`/themes/${item.node.slug}`}>
      <Card data={item} />
    </a>
  ))

  return (
    <Layout>
      <SEO title="Themes" />
      <section className="container">
        <h1>Themes</h1>
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
          image {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`

export default ThemesPage
