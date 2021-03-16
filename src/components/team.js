import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import RichText from '../components/rich-text'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulRichText(title: { eq: "Black Bottom Digital Archive Team" }) {
        title
        body {
          json
        }
      }
    }
  `)

  return (
    <>
      <h1>{data.contentfulRichText.title}</h1>
      {data.contentfulRichText?.body?.json && (
        <RichText data={data.contentfulRichText.body} />
      )}
    </>
  )
}

export default Team
