import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import RichText from '../components/rich-text'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulRichText(id: { eq: "2c4726e4-1146-5bda-9b01-1cfcb439a7eb" }) {
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
