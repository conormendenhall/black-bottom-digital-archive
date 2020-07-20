import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Description from '../components/description'
import Team from '../components/team'
import Contact from '../components/contact'
import Events from '../components/events'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="container">
        <Description />
        <Team data={data} />
      </section>
      <Contact />
      <section className="container">
        <Events data={data.events} />
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
export const query = graphql`
  query AboutPageQuery {
    kamau: file(relativePath: { eq: "team/kamau-bio-pic.jpg" }) {
      ...fluidImage
    }
    tulani: file(relativePath: { eq: "team/tulani-bio-pic.jpg" }) {
      ...fluidImage
    }
    pg: file(relativePath: { eq: "team/pg-bio-pic.jpg" }) {
      ...fluidImage
    }
    lawrielle: file(relativePath: { eq: "team/lawrielle-bio-pic.jpg" }) {
      ...fluidImage
    }
    events: allContentfulEvent {
      edges {
        node {
          id
          title
          slug
          dateAndTime
          body {
            json
          }
          image {
            fluid {
              base64
              tracedSVG
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
  }
`

export default AboutPage
