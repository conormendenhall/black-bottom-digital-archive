import React from 'react'

import Img from 'gatsby-image'

import EntryTags from './entry-tags'
import SEO from './seo'
import LeafletMap from './leaflet-map'
import InterviewMedia from './interview-media'
import RichText from './rich-text'

const Article = ({ data, children }) => {
  return (
    <>
      <SEO title={data.title} />
      <section className="container article">
        <h1>{data.title}</h1>
        {data.image?.fluid && (
          <Img fluid={data.image.fluid} className="article-image" />
        )}
        {(data.audio || data.transcript) && (
          <InterviewMedia audio={data.audio} transcript={data.transcript} />
        )}
        {data.body?.json && <RichText data={data.body} />}
        {data.bibliography?.childMarkdownRemark && (
          <div className="article-bibliography">
            <h4>Sources</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.bibliography.childMarkdownRemark.html,
              }}
            />
          </div>
        )}
        {data.places && typeof window !== 'undefined' && (
          <LeafletMap
            center={[42.345, -83.044]}
            zoom={14}
            data={[data]}
            className="article-map leaflet-container"
          />
        )}
      </section>
      {children && <section className="container">{children}</section>}
      {data.tags && (
        <section className="container">
          <h3>Tags</h3>
          <EntryTags data={data.tags}></EntryTags>
        </section>
      )}
    </>
  )
}

export default Article
