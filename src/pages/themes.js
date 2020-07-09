import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThemesPage = ({ data }) => {
  let themes = data.themes.edges.map((item, key) => (
    <a key={item.node.id} href={`/themes/${item.node.slug}`}>
      <div className="theme-card">
        {item.node.image && <img src={item.node.image.file.url}></img>}
        <span>{item.node.title}</span>
      </div>
    </a>
  ))

  return (
    <Layout>
      <SEO title="Themes" />
      <section className="container">
        <h1>Themes</h1>
        <div id="themes">{themes}</div>
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
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default ThemesPage
