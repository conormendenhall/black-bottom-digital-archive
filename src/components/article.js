import React from 'react'

import Img from 'gatsby-image'

import { INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import EntryTags from './entry-tags'
import SEO from './seo'
import LeafletMap from './leaflet-map'
import InterviewMedia from './interview-media'

const Article = ({ data, children }) => {
  const options = {
    renderLink: {
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.url}>{children}</a>
      },
    },
  }

  return (
    <>
      <SEO title={data.title} />
      <section className="container article">
        <h1>{data.title}</h1>
        {(data.audio || data.transcript) && (
          <InterviewMedia audio={data.audio} transcript={data.transcript} />
        )}
        {data.image?.fluid && (
          <Img fluid={data.image.fluid} className="article-image" />
        )}
        {data.body?.json && documentToReactComponents(data.body.json, options)}
      </section>
      {data.place && (
        <section className="container">
          {typeof window !== 'undefined' && (
            <LeafletMap
              position={[data.place.location.lat, data.place.location.lon]}
              zoom={15}
              sites={[data]}
              className="article-map"
            />
          )}
        </section>
      )}
      <section className="container">{children}</section>
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
