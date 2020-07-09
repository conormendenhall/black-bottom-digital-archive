import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EntryTags from '../components/entry-tags'
import Breadcrumb from '../components/breadcrumb'

import { INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
        <h1>{pageContext.title}</h1>
        {documentToReactComponents(pageContext.body.json, options)}
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
