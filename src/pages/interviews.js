import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Card from '../components/card'

const InterviewsPage = ({ data }) => {
  let interviews = data.interviews.edges.map((item, key) => (
    <Card url="/interviews/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <Head title="Interviews" />
      <div className="index-header">
        <section className="container">
          <h1>Oral Histories</h1>
          <p>
            These oral histories are interviews with some of those who lived in
            or around Black Bottom in the ‘40s and ‘50s (or had family in the
            neighborhood). Each entry include transcripts, summaries of
            interview content, and mp3 streaming audio. If you are interested in
            doing an oral history interview, please contact us for info.
          </p>
        </section>
      </div>
      <div className="card-gallery-container">
        <section className="container">
          <div id="interviews" className="card-gallery">
            {interviews}
          </div>
        </section>
      </div>
      <div>
        <section className="container">
          <h2>Share your story.</h2>
          <p>
            Did you or your family members live, work, or play in Black Bottom?
            Do you have stories, photos or other media to share? Learn more
            about contributing your history to Black Bottom Archives.
          </p>
          <span className="button-section">
            <span className="button">
              <a href="https://google.com">Share Your Oral History</a>
            </span>
            <span className="button">
              <a href="https://google.com">Submit Media / Photos / Artifacts</a>
            </span>
          </span>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    interviews: allContentfulInterview(sort: { order: ASC, fields: title }) {
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
