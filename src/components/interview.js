import React from 'react'

import Layout from './layout'
import SEO from './seo'
import EntryTags from './entry-tags'
import Breadcrumb from './breadcrumb'

const InterviewPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} description="Interview" />
      <section className="container">
        <Breadcrumb text="View more interviews" href="/interviews" />
        <div className="historical-site">
          <h1>{pageContext.title}</h1>
          {pageContext.interviewAudio &&
            pageContext.interviewAudio.map((item, key) => (
              <audio controls key={key}>
                <source
                  src={item.file.url}
                  type={item.file.contentType}
                ></source>
              </audio>
            ))}
          {pageContext.text?.text && <pre>{pageContext.text.text}</pre>}
        </div>
      </section>
      {pageContext.tags && (
        <section className="container">
          <h3>Tags</h3>
          <EntryTags data={pageContext.tags}></EntryTags>
        </section>
      )}
    </Layout>
  )
}

export default InterviewPage
