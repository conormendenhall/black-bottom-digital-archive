import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Card from '../components/card'

const OralHistoriesPage = ({ data }) => {
  let oralHistories = data.oralHistories.edges.map((item, key) => (
    <Card url="/oral-histories/" data={item.node} key={key} />
  ))

  return (
    <Layout>
      <Head title="Oral Histories" />
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
          <div id="oralHistories" className="card-gallery">
            {oralHistories}
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
          <div className="button-section">
            <a href="https://google.com">
              <div className="button">
                Share Your
                <br /> Oral History
              </div>
            </a>
            <a href="https://google.com">
              <div className="button">
                Submit Media /<br /> Photos / Artifacts
              </div>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    oralHistories: allContentfulInterview(sort: { title: ASC }) {
      edges {
        node {
          id
          title
          slug
          brief
        }
      }
    }
  }
`

export default OralHistoriesPage
