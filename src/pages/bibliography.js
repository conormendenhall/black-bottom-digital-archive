import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RichText from '../components/rich-text'

const BibliographyPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Bibliography" />
      <section className="container">
        <h1>{data.bibliography?.name}</h1>
        <div id="bibliography">
          {data.bibliography?.resources?.json && (
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
      id: { eq: "a7fa815e-b81b-5839-8132-cd693159b52c" }
    ) {
      name
      resources {
        json
      }
    }
  }
`

export default BibliographyPage
