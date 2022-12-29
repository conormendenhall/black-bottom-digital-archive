import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import LeafletMap from '../components/leaflet-map'

const IndexPage = ({ data }) => {
  let places = [...data.sites.edges, ...data.figures.edges]
  return (
    <Layout>
      <Head title="Home" />
      <div className="home-title container">
        <h1 className="container">Black Bottom Digital Archive</h1>
      </div>
      <section className="container welcome">
        <p>
          Welcome to the Black Bottom Digital Archive, where the memories and
          experiences of those from the long-gone Black Bottom neighborhood are
          preserved for future generations.
        </p>
        <p>
          Here you will find oral history interviews, historical documents and
          media from the neighborhood, and entries about historical sites and
          figures and events.
        </p>
        <span className="button-section">
          <span className="button">
            <a href="/about">About Black Bottom Archives</a>
          </span>
          <span className="button">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform">
              Contribute to Black Bottom Archives
            </a>
          </span>
        </span>
      </section>
      <section className="featured-section">
        <div className="container">
          <a href={'/historical-figures/' + data.featuredFigure.slug}>
            <div className="featured-banner">
              <div className="featured-content">
                <h2>Featured Historical Figure</h2>
                <h3>{data.featuredFigure.title}</h3>
                <p>{data.featuredFigure.brief}</p>
              </div>
              <div className="featured-image">
                <img src={data.featuredFigure.image.fluid.src} />
                <div className="background-circle"></div>
              </div>
            </div>
          </a>
          <a href={'/historical-sites/' + data.featuredSite.slug}>
            <div className="featured-banner">
              <div className="featured-content">
                <h2>Featured Historical Site</h2>
                <h3>{data.featuredSite.title}</h3>
                <p>{data.featuredSite.brief}</p>
              </div>
              <div className="featured-image">
                <img src={data.featuredSite.image.fluid.src} />
                <div className="background-diamond"></div>
              </div>
            </div>
          </a>
          <a href={'/interviews/' + data.featuredInterview.slug}>
            <div className="featured-banner">
              <div className="featured-content">
                <h2>Featured Oral History</h2>
                <h3>{data.featuredInterview.title}</h3>
                <p>{data.featuredInterview.brief}</p>
              </div>
              <div className="featured-image">
                <img src={data.featuredInterview.image.fluid.src} />
                <div className="background-circle"></div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section className="map-section">
        <div className="container">
          <h2>Mapping Black Bottom</h2>
          <p>
            Click a pin on the historical map to learn more about the historical
            sites in Black Bottom.
          </p>
          <div className="map-and-index">
            <div>
              <h3>Historical Site Index</h3>
              <ul>
                {places.map(({ node }) => (
                  <a href={node.slug} key={node.id}>
                    <li>{node.title}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {typeof window !== 'undefined' && (
              <LeafletMap
                center={[42.345, -83.044]}
                zoom={13}
                data={places.map(({ node }) => node)}
                className="leaflet-container"
              />
            )}
          </div>
          <h3>Contribute to the Map</h3>
          <p>
            Black Bottom Archives Historical Map is maintained by Black Bottom
            Archives and shows the historical sites of the Black Bottom
            community. Your contributions are helpful in illustrating the full
            history of the Black Bottom community. To learn more and submit
            contributions to the map, please fill in our form.
          </p>
          <span className="button-section">
            <span className="button submit-site-button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform">
                Submit a Historical Site
              </a>
            </span>
          </span>
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
    sites: allContentfulHistoricalSite(sort: { fields: title }) {
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
    featuredFigure: contentfulHistoricalFigure(isFeatured: { eq: true }) {
      id
      title
      slug
      brief
      image {
        fluid {
          src
        }
      }
    }
    featuredSite: contentfulHistoricalSite(isFeatured: { eq: true }) {
      id
      title
      slug
      brief
      image {
        fluid {
          src
        }
      }
    }
    featuredInterview: contentfulInterview(isFeatured: { eq: true }) {
      id
      title
      slug
      brief
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default IndexPage
