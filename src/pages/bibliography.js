import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import RichText from '../components/rich-text'

const BibliographyPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Bibliography" />
      <section className="container">
        <h1>{data.bibliography?.name}</h1>
        <div id="bibliography">
          {data.bibliography?.resources?.raw && (
            <RichText data={data.bibliography.resources} />
          )}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    bibliography: contentfulBibliography(
      name: { eq: "The Black Bottom Bibliography" }
    ) {
      name
      resources {
        raw
      }
    }
  }
`

export default BibliographyPage
