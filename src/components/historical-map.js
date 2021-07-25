import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HistoricalMap = () => {
  const data = useStaticQuery(graphql`
    query {
      historicalMap: file(
        relativePath: { eq: "200518_Sanborn Stitch_web_2000px.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.historicalMap.childImageSharp.fluid} alt="Historical Map of Black Bottom, Detroit" />
}

export default HistoricalMap
