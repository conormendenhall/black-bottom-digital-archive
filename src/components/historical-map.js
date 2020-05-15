import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HistoricalMap = () => {
  const data = useStaticQuery(graphql`
    query {
      historicalMap: file(
        relativePath: { eq: "200518_Sanborn Stitch_web_12000px.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 12000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.historicalMap.childImageSharp.fluid} />
}

export default HistoricalMap
