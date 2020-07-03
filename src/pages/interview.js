import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import EntryTags from '../components/entry-tags'
import Breadcrumb from '../components/breadcrumb'

const InterviewPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Interview" />
      <section className="container">
        <Breadcrumb text="View more interviews" href="/interviews" />
        <div className="historical-site">
          <h1>{pageContext.title}</h1>
          {pageContext.interviewAudio &&
            pageContext.interviewAudio.map((item, key) => (
              <audio controls>
                <source
                  src={item.file.url}
                  type={item.file.contentType}
                ></source>
              </audio>
            ))}
          <pre>{pageContext.text.text}</pre>
        </div>
      </section>
      {pageContext.tags && (
        <section className="container">
          <h3>Tags</h3>
          <EntryTags data={pageContext.tags}></EntryTags>
        </section>
      )}
      <Footer />
    </Layout>
  )
}

export default InterviewPage
