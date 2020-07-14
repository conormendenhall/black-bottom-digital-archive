import React from 'react'

import Img from 'gatsby-image'

import { INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from './layout'
import SEO from './seo'
import EntryTags from './entry-tags'
import Breadcrumb from './breadcrumb'

const options = {
  renderNode: {
    // [INLINES.HYPERLINK]: (node, children) => <h1>HYPERLINK HERE</h1>,
  },
}

const ThemePage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section className="container">
        <Breadcrumb text="View more themes" href="/themes" />
        <div className="theme">
          {pageContext.image?.fluid && (
            <Img fluid={pageContext.image.fluid} className="article-image" />
          )}
          <h1>{pageContext.title}</h1>
          {pageContext.body?.json &&
            documentToReactComponents(pageContext.body.json, options)}
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

export default ThemePage
