import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const InterviewsPage = ({ data }) => {
  let interviews = data.interviews.edges.map((item, key) => (
    <a key={item.node.id} href={`/interviews/${item.node.slug}`}>
      <div className="card">
        {item.node.image ? (
          <Img fluid={item.node.image.fluid} />
        ) : (
          <Img fluid={data.default.childImageSharp.fluid} />
        )}
        <div className="card-title">
          <span>{item.node.title}</span>
        </div>
      </div>
    </a>
  ))

  return (
    <Layout>
      <SEO title="Interviews" />
      <section className="container">
        <h1>Oral Histories</h1>
        <p>
          Oral Histories description here. Describe the project. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div id="interviews" className="card-gallery">
          {interviews}
        </div>
      </section>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    interviews: allContentfulInterview {
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
    default: file(relativePath: { eq: "interview-microphone.jpg" }) {
      ...fluidImage
    }
  }
`

export default InterviewsPage
