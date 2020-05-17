import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTag {
        edges {
          node {
            name
            slug
            id
            historical_site {
              title
              id
            }
          }
        }
      }
    }
  `)

  const tags = data.allContentfulTag.edges
  return (
    <div className="tags">
      <h1>Tags</h1>
      {tags.map(({ node }) => {
        return (
          <div key={node.id}>
            <b>name:</b> {node.name} <b>slug:</b> {node.slug}
            <div className="sites">
              {node.historical_site.map(site => {
                return <div key={site.id}>{site.title}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tags
