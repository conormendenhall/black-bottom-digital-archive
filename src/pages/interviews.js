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
        <span>{item.node.title}</span>
      </div>
    </a>
  ))

  return (
    <Layout>
      <SEO title="Interviews" />
      <section className="container">
        <h1>Interviews</h1>
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
