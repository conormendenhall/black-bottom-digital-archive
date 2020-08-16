import React from 'react'

import Img from 'gatsby-image'

import { INLINES, BLOCKS } from '@contentful/rich-text-types'
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
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <img
            src={node.data.target.fields.file['en-US'].url}
            className="article-embedded-image"
          />
        )
      },
    },
  }

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
        {data.body?.json && documentToReactComponents(data.body.json, options)}
        {data.place && typeof window !== 'undefined' && (
          <LeafletMap
            position={[data.place.location.lat, data.place.location.lon]}
            zoom={15}
            places={[data]}
            className="article-map leaflet-container"
          />
        )}
      </section>
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
