import React from 'react'

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import UseSiteMetadata from '../hooks/use-site-metadata'
import Layout from './layout'
import EntryTags from './entry-tags'
import Head from './head'
import InterviewMedia from './interview-media'
import RichText from './rich-text'
import Breadcrumb from './breadcrumb'

const Article = ({ pageContext, location }) => {
  const { baseUrl } = UseSiteMetadata()
  let entryType = ''
  let breadcrumbText = ''
  let breadcrumbPath = ''

  if (pageContext.node.internal.type === 'ContentfulHistoricalSite') {
    entryType = 'Historical Site'
    breadcrumbText = 'Historical Sites'
    breadcrumbPath = '/historical-sites'
  } else if (pageContext.node.internal.type === 'ContentfulHistoricalFigure') {
    entryType = 'Historical Figure'
    breadcrumbText = 'Historical Figures'
    breadcrumbPath = '/historical-figures'
  } else if (pageContext.node.internal.type === 'ContentfulInterview') {
    entryType = 'Oral History'
    breadcrumbText = 'Oral Histories'
    breadcrumbPath = '/oral-histories'
  }

  return (
    <Layout>
      <div className="article">
        <Head title={pageContext.node.title} />
        <div className="article-header">
          <section className="container">
            <Breadcrumb text={breadcrumbText} href={breadcrumbPath} />
          </section>
          <section className="container article-header-content">
            {pageContext.node.image && (
              <GatsbyImage
                image={getImage(pageContext.node.image)}
                alt={pageContext.node.image.description}
              />
            )}
            <div>
              <h1 className="article-title">{pageContext.node.title}</h1>
              {pageContext.node.designation && (
                <p>{pageContext.node.designation.toUpperCase()}</p>
              )}
            </div>
            <div>
              <div className="social-text">Share this page!</div>
              <div className="social-icons">
                <a
                  href={`https://twitter.com/intent/tweet?text=Oral%20history%20of%20Detroit%27s%20Black%20Bottom%20neighborhood&url=${baseUrl}${location.pathname}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterSquare title="Twitter" />
                </a>
                <a
                  href={`http://www.facebook.com/share.php?u=${baseUrl}${location.pathname}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook title="Facebook" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="container">
          {(pageContext.node.audio || pageContext.node.transcript) && (
            <InterviewMedia
              audio={pageContext.node.audio}
              transcript={pageContext.node.transcript}
            />
          )}
          {pageContext.node.body?.raw && (
            <RichText data={pageContext.node.body} />
          )}
        </section>
        <section className="container">
          {pageContext.node.bibliography?.childMarkdownRemark && (
            <>
              <h2>Sources</h2>
              <div className="article-sources">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      pageContext.node.bibliography.childMarkdownRemark.html,
                  }}
                />
              </div>
            </>
          )}
        </section>
        <section className="container">
          {pageContext.node.tags && (
            <>
              <h2>Tags</h2>
              <EntryTags data={pageContext.node.tags}></EntryTags>
            </>
          )}
        </section>
        <section className="container">
          {pageContext.next && (
            <div className="button-section">
              <a href={breadcrumbPath + '/' + pageContext.next.slug}>
                <div className="button">
                  Next {entryType}:
                  <br /> {pageContext.next.title}
                </div>
              </a>
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}

export default Article
