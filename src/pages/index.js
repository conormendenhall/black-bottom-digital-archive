import React from 'react'

import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Head from '../components/head'
import LeafletMap from '../components/leaflet-map'

const IndexPage = ({ data }) => {
  let places = [...data.sites.edges, ...data.figures.edges]
  return (
    <Layout>
      <Head title="Home" />
      <div className="home-title container">
        <h1>Black Bottom Digital Archive</h1>
      </div>
      <section className="container">
        <div className="welcome-text">
          <p>
            Welcome to the Black Bottom Digital Archive, where the memories and
            experiences of those from the long-gone Black Bottom neighborhood
            are preserved for future generations.
          </p>
          <p>
            Here you will find oral history interviews, historical documents and
            media from the neighborhood, and entries about historical sites and
            figures and events.
          </p>
        </div>
        <div className="button-section">
          <a href="/about">
            <div className="button">
              About Black Bottom
              <br /> Archives
            </div>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform">
            <div className="button">
              Contribute to
              <br /> Black Bottom Archives
            </div>
          </a>
        </div>
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
                <GatsbyImage
                  image={getImage(data.featuredFigure.image)}
                  alt={data.featuredFigure.image.description}
                />
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
                <GatsbyImage
                  image={getImage(data.featuredSite.image)}
                  alt={data.featuredSite.image.description}
                />
                <div className="background-diamond"></div>
              </div>
            </div>
          </a>
          <a href={'/oral-histories/' + data.featuredHistory.slug}>
            <div className="featured-banner">
              <div className="featured-content">
                <h2>Featured Oral History</h2>
                <h3>{data.featuredHistory.title}</h3>
                <p>{data.featuredHistory.brief}</p>
              </div>
              <div className="featured-image">
                <GatsbyImage
                  image={getImage(data.featuredHistory.image)}
                  alt={data.featuredHistory.image.description}
                />
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
          <h3>Historical Site Index</h3>
          <div className="map-and-index">
            <ul className="map-index">
              {places.map(({ node }) => (
                <a href={node.slug} key={node.id} title={node.title}>
                  <li>{node.title}</li>
                </a>
              ))}
            </ul>
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
          <div className="button-section">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform">
              <div className="button submit-site-button">
                Submit a Historical Site
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="contribute-section">
        <div className="container">
          <h2>Ways to Contribute</h2>
          <p>
            Did you or your family members live, work, or play in Black Bottom?
            <br />
            Do you have stories, photos or other media to share?
          </p>
          <p>
            Click on one of the links below to learn more information and
            contribute to the Black Bottom Archive community.
          </p>
          <div className="button-section">
            <a href="/about">
              <div className="button">
                Share Your
                <br /> Oral History
              </div>
            </a>
            <a href="/about">
              <div className="button">
                Submit Media /<br /> Photos / Artifacts
              </div>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform">
              <div className="button">
                Donate to Black
                <br /> Bottom Archives
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

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
    figures: allContentfulHistoricalFigure(sort: { fields: title }) {
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
        gatsbyImageData
        description
      }
    }
    featuredSite: contentfulHistoricalSite(isFeatured: { eq: true }) {
      id
      title
      slug
      brief
      image {
        gatsbyImageData
        description
      }
    }
    featuredHistory: contentfulInterview(isFeatured: { eq: true }) {
      id
      title
      slug
      brief
      image {
        gatsbyImageData
        description
      }
    }
  }
`

export default IndexPage
