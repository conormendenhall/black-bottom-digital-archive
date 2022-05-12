import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const InterviewsPage = ({ data }) => {
  let interviews = data.interviews.edges.map((item, key) => (
    <Card url="/interviews/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <SEO title="Interviews" />
      <section className="container">
        <h1>Oral Histories</h1>
        <p>
          These oral histories are interviews with some of those who lived in or
          around Black Bottom in the ‘40s and ‘50s (or had family in the
          neighborhood). Each entry include transcripts, summaries of interview
          content, and mp3 streaming audio. If you are interested in doing an
          oral history interview, please contact us for info.
        </p>
        <div id="interviews" className="card-gallery">
          {interviews}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    interviews: allContentfulInterview(sort: {order: ASC, fields: title}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default InterviewsPage
