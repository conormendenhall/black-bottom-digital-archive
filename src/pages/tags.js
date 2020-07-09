import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TagsPage = ({ data }) => {
  let tags = data.tags.edges.map((item, key) => (
    <div key={item.node.id} className="entry-link">
      <a href={`/tags/${item.node.slug}`}>
        <span>{item.node.name}</span>
      </a>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Historical Sites" />
      <section className="container">
        <h1>Tags</h1>
        {tags}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    tags: allContentfulTag {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`

export default TagsPage
