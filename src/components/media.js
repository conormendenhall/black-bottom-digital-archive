import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Media = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(limit: 10) {
        edges {
          node {
            title
            fluid(maxWidth: 613) {
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `)

  const items = data.allContentfulAsset.edges
  return (
    <div>
      <p className="sample">MEDIA</p>
      {items.map(({ node }) => {
        return <img src={node.fluid.src}></img>
      })}
    </div>
  )
}

export default Media
