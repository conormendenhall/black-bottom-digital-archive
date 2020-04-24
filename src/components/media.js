import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Media = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage(limit: 20) {
        edges {
          node {
            id
            title
            photo {
              fluid {
                src
              }
            }
            imageCaption {
              imageCaption
            }
          }
        }
      }
    }
  `)

  const items = data.allContentfulImage.edges
  return (
    <div>
      <h1 className="media">Media</h1>
      {items.map(({ node }) => {
        return (
          <img
            key={node.id}
            src={node.photo.fluid.src}
            alt={node.imageCaption?.imageCaption || node.title}
          ></img>
        )
      })}
    </div>
  )
}

export default Media
