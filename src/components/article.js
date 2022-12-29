import React from 'react'

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import UseSiteMetadata from '../hooks/use-site-metadata'
import EntryTags from './entry-tags'
import Head from './head'
import InterviewMedia from './interview-media'
import RichText from './rich-text'
import Breadcrumb from './breadcrumb'

const Article = ({ data, breadcrumb, children, location }) => {
  const image = getImage(data.image)
  const { baseUrl } = UseSiteMetadata()

  return (
    <div className="article">
      <Head title={data.title} />
      <div className="article-header">
        <section className="container article-header-content">
          <div>
            {breadcrumb && (
              <>
                <Breadcrumb text={breadcrumb.text} href={breadcrumb.href} />
              </>
            )}
            <h1 className="article-title">{data.title}</h1>
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
        {(data.audio || data.transcript) && (
          <InterviewMedia audio={data.audio} transcript={data.transcript} />
        )}
        {image && <GatsbyImage image={image} className="article-image" />}
        {data.body?.json && <RichText data={data.body} />}
        {children && <section className="container">{children}</section>}
      </section>
      <section className="container">
        {data.bibliography?.childMarkdownRemark && (
          <>
            <h2>Sources</h2>
            <div className="article-sources">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.bibliography.childMarkdownRemark.html,
                }}
              />
            </div>
          </>
        )}
      </section>
      <section className="container">
        {data.tags && (
          <>
            <h2>Tags</h2>
            <EntryTags data={data.tags}></EntryTags>
          </>
        )}
      </section>
    </div>
  )
}

export default Article
