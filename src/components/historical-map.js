import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const HistoricalMap = () => {
  const data = useStaticQuery(graphql`
    query {
      historicalMap: file(
        relativePath: { eq: "200518_Sanborn Stitch_web_2000px.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)

  const image = getImage(data.historicalMap.childImageSharp.gatsbyImageData)

  return <GatsbyImage image={image} alt="Historical Map of Black Bottom, Detroit" />
}

export default HistoricalMap
