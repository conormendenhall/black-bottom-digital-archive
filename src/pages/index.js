import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeafletMap from '../components/leaflet-map'

const IndexPage = ({ data }) => {
  let places = [...data.sites.edges, ...data.figures.edges]
  return (
    <Layout>
      <SEO title="Home" />
      {typeof window !== 'undefined' && (
        <LeafletMap
          center={[42.345, -83.044]}
          zoom={13}
          data={places.map(({ node }) => node)}
          className="leaflet-container"
        />
      )}
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
          slug
          places {
            title
            location {
              lat
              lon
            }
          }
          internal {
            type
          }
        }
      }
    }
    figures: allContentfulHistoricalFigure {
      edges {
        node {
          id
          title
          slug
          places {
            title
            location {
              lat
              lon
            }
          }
          internal {
            type
          }
        }
      }
    }
  }
`

export default IndexPage
