import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTag {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)

  const items = data.allContentfulTag.edges
  return (
    <div className="tags">
      <h1>Tags</h1>
      {items.map(({ node }) => {
        return (
          <div key={node.id}>
            <b>name:</b> {node.name} <b>slug:</b> {node.slug}
          </div>
        )
      })}
      <div className="tagged-entries">
          
      </div>
    </div>
  )
}

export default Tags
