import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import Media from '../components/media'

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    {/* <section className="hero">
      <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
    </section> */}
    <section className="container">
      <span className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <div className="gallery-grid">
        <Img fluid={data.ebonyRoom.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.freewayMap.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.hastings.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>WE'RE CRAZY ABOUT COFFEE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Media />
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[55.952103, -3.196175]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"Local Cafe, 65 Park Row"} // Icon text
      />
    }
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
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
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
  }
`;

export default IndexPage
