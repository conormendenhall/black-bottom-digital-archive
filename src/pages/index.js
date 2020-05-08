import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import Interview from '../components/interview'
import Tags from '../components/tags'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container">
        <Tags></Tags>
      </section>
      <section className="container">
        <Interview data={data.interviews}></Interview>
      </section>
      {typeof window !== 'undefined' && (
        <LeafletMap
          position={[42.3408, -83.037]} // Your Coordinates
          zoom={15} // Zoom Level
          places={data.places.edges}
        />
      )}
      <Footer />
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
          text {
            text
          }
        }
      }
    }
    places: allContentfulPlace(limit: 20) {
      edges {
        node {
          id
          coordinates {
            lon
            lat
          }
          media {
            id
            title
            photo {
              description
              fixed(width: 400) {
                ...GatsbyContentfulFixed
              }
            }
          }
          name
        }
      }
    }
  }
`

export default IndexPage
