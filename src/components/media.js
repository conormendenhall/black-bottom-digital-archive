import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Media = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulImage(
      filter: {
      }
    ) {
      edges {
        node {
          title
        }
      }
    }
  }
  `)

  const items = data.allContentfulImage.edges;
  return (
    <div>
      <p className="sample">SAMPLE MEDIA</p>
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li className="menu-item">
                <h3>{node.title}</h3>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Media;