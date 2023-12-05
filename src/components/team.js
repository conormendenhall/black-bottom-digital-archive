import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import RichText from '../components/rich-text'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulRichText(title: { eq: "Black Bottom Digital Archive Team" }) {
        title
        body {
          raw
        }
      }
    }
  `)

  return (
    <>
      <h2>{data.contentfulRichText.title}</h2>
      {data.contentfulRichText?.body?.raw && (
        <RichText data={data.contentfulRichText.body} />
      )}
    </>
  )
}

export default Team
