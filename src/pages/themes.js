import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThemesPage = ({ data }) => {
  let themes = data.themes.edges.map((item, key) => (
    <a key={item.node.id} href={`/themes/${item.node.slug}`}>
      <div className="card">
        {item.node.image && <Img fluid={item.node.image.fluid} />}
        <div className="card-title">
          <span>{item.node.title}</span>
        </div>
      </div>
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
