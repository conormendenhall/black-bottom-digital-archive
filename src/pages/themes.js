import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const ThemesPage = ({ data }) => {
  let themes = data.themes.edges.map((item, key) => (
    <Card url="/themes/" data={item.node} />
  ))

  return (
    <Layout>
      <SEO title="Themes" />
      <section className="container">
        <h1>Themes</h1>
        <p>
          Themes description here. Describe the project. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div id="themes" className="mini-card-gallery">
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
