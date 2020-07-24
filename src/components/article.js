import React from 'react'

import Img from 'gatsby-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import EntryTags from './entry-tags'
import SEO from './seo'
import LeafletMap from './leaflet-map'

const Article = ({ data }) => {
  return (
    <>
      <SEO title={data.title} />
      <section className="container article">
        <div className="article-text">
          <h1>{data.title}</h1>
          {data.body?.json && documentToReactComponents(data.body.json)}
        </div>
        {data.image?.fluid && (
          <Img fluid={data.image.fluid} className="article-image" />
        )}
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
