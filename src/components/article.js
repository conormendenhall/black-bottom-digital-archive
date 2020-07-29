import React from 'react'

import Img from 'gatsby-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { BsFileText } from 'react-icons/bs'

import EntryTags from './entry-tags'
import SEO from './seo'
import LeafletMap from './leaflet-map'

const Article = ({ data }) => {
  return (
    <>
      <SEO title={data.title} />
      <section className="container article">
        <h1>{data.title}</h1>
        <div className="interview-media">
          {data.audio &&
            data.audio.map((item, key) => (
              <div key={key} className="interview-audio">
                <div>{item.title}</div>
                <audio controls>
                  <source
                    src={item.file.url}
                    type={item.file.contentType}
                  ></source>
                </audio>
              </div>
            ))}
          {data.transcript &&
            data.transcript.map((item, key) => (
              <a
                key={key}
                href={item.file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="transcript">
                  <div className="icon">
                    <BsFileText />
                  </div>
                  <div>
                    <span>{item.title}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>
        {data.body?.json && documentToReactComponents(data.body.json)}
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
