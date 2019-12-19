import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';


const Instagram = () => {
  const data = useStaticQuery(graphql`
  query {
    allInstaNode(
      limit:6,
      sort: {
        fields: [timestamp]
        order: [DESC]
      }
    ) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          localFile {
            childImageSharp {
              fixed(width: 280, height: 280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  `)
  const instaPosts = data.allInstaNode.edges;
  return (
    <div className="insta">
      <a href="https://www.instagram.com/blackbottomarchives/" target="_blank">
        <h2>INSTAGRAM</h2>
        <span>@blackbottomarchives</span>
      </a>
      <ul className="insta-posts">
          {instaPosts.map(({ node }) => {
            return (
              <a href={"https://www.instagram.com/p/" + node.id + "/"} target="_blank">
                <li key={node.id} className="insta-post">
                  <Img fixed={node.localFile.childImageSharp.fixed} />
                  <div className="overlay">
                    <img className="icon" src={require('../images/like.png')} alt="like icon"/>
                    <p className="text">{node.likes}</p>
                  </div>
                </li>
              </a>
            )
          })}
      </ul>
    </div>
  )
}

export default Instagram;