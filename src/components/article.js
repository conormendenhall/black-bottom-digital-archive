import React from 'react'

import Img from 'gatsby-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import EntryTags from './entry-tags'

const Article = ({ data }) => {
  return (
    <>
      <section className="container article">
        <div className="article-text">
          <h1>{data.title}</h1>
          {data.body?.json && documentToReactComponents(data.body.json)}
        </div>
        {data.image?.fluid && (
          <Img fluid={data.image.fluid} className="article-image" />
        )}
      </section>
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
