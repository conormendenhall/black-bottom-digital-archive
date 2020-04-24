import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <div key={item.node.id}>
      <h3>{item.node.title}</h3>
      <p>{item.node.abstract.abstract}</p>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Home" />
      <section className="container">{sites}</section>
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
    sites: allContentfulHistoricalSite {
      edges {
        node {
          id
          title
          abstract {
            id
            abstract
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
