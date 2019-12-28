import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img
          fluid={data.collage.childImageSharp.fluid}
          className="hero-image"
        />
      </section>
      <section className="container">
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className="gallery-grid">
          <Img
            fluid={data.ebonyRoom.childImageSharp.fluid}
            className="gallery-img1"
          />
          <Img
            fluid={data.freewayMap.childImageSharp.fluid}
            className="gallery-img2"
          />
          <Img
            fluid={data.hastings.childImageSharp.fluid}
            className="gallery-img3"
          />
        </div>
      </section>
      <div className="parallax"></div>
      {typeof window !== 'undefined' && (
        <LeafletMap
          position={[42.3408, -83.037]} // Your Coordinates
          zoom={15} // Zoom Level
          places={data.places.edges}
        />
      )}
      <section className="container">
        <Instagram />
      </section>
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
    collage: file(relativePath: { eq: "collage.jpg" }) {
      ...fluidImage
    }
    freewayMap: file(relativePath: { eq: "freeway-map.jpg" }) {
      ...fluidImage
    }
    ebonyRoom: file(relativePath: { eq: "ebony-room.jpg" }) {
      ...fluidImage
    }
    hastings: file(relativePath: { eq: "hastings.jpg" }) {
      ...fluidImage
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
