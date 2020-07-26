import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeafletMap from '../components/leaflet-map'
import HistoricalMap from '../components/historical-map'

const IndexPage = ({ data }) => {
  return (
    <Layout home={true}>
      <SEO title="Home" />
      {typeof window !== 'undefined' && (
        <LeafletMap
          position={[42.3408, -83.037]}
          zoom={15}
          sites={data.sites.edges.map(({ node }) => {
            return node
          })}
          className="leaflet-container"
        />
      )}
      <HistoricalMap />
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
          place {
            title
            location {
              lat
              lon
            }
          }
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
          internal {
            type
          }
        }
      }
    }
  }
`

export default IndexPage
