import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

const InterviewsPage = ({ data }) => {
  let interviews = data.interviews.edges.map((item, key) => (
    <div key={item.node.id} className="entry-link">
      <a href={`/interviews/${item.node.slug}`}>
        <span>{item.node.title}</span>
      </a>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Interviews" />
      <section className="container">
        <h1>Interviews</h1>
        {interviews}
      </section>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    interviews: allContentfulInterview {
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
