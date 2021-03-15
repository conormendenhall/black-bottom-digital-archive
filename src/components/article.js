import React from 'react'

import Img from 'gatsby-image'

import EntryTags from './entry-tags'
import SEO from './seo'
import LeafletMap from './leaflet-map'
import InterviewMedia from './interview-media'
import RichText from './rich-text'
import Breadcrumb from './breadcrumb'

const Article = ({ data, breadcrumb, children }) => {
  return (
    <div className="article">
      <SEO title={data.title} />
      <section className="container">
        <h1>{data.title}</h1>
        {data.image?.fluid && (
          <Img fluid={data.image.fluid} className="article-image" />
        )}
        {(data.audio || data.transcript) && (
          <InterviewMedia audio={data.audio} transcript={data.transcript} />
        )}
        {data.body?.json && <RichText data={data.body} />}
        {data.places && typeof window !== 'undefined' && (
          <LeafletMap
            center={[42.345, -83.044]}
            zoom={14}
            data={[data]}
            className="article-map leaflet-container"
          />
        )}
        {children && <section className="container">{children}</section>}
      </section>
      <section className="container">
        {data.tags && (
          <>
            <h3>Tags</h3>
            <EntryTags data={data.tags}></EntryTags>
          </>
        )}
      </section>
      <section className="container">
        {data.bibliography?.childMarkdownRemark && (
          <>
            <h3>Sources</h3>
            <div className="article-sources">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.bibliography.childMarkdownRemark.html,
                }}
              />
            </div>
          </>
        )}
        {breadcrumb && (
          <>
            <Breadcrumb text={breadcrumb.text} href={breadcrumb.href} />
          </>
        )}
      </section>
    </div>
  )
}

export default Article
