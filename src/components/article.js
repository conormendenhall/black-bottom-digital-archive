import React from 'react'

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import EntryTags from './entry-tags'
import SEO from './seo'
import InterviewMedia from './interview-media'
import RichText from './rich-text'
import Breadcrumb from './breadcrumb'

const Article = ({ data, breadcrumb, children }) => {
  const image = getImage(data.image)

  return (
    <div className="article">
      <SEO title={data.title} />
      <section className="container article-header">
        <div>
          {breadcrumb && (
            <>
              <Breadcrumb text={breadcrumb.text} href={breadcrumb.href} />
            </>
          )}
          <h1>{data.title}</h1>
        </div>
        <div className="social">
          Share this page!
          <div>
            <a
              href="http://twitter.com/_blackbottom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter title="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/BlackBottomArchives/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook title="Facebook" />
            </a>
            <a
              href="http://www.instagram.com/blackbottomarchives"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram title="Instagram" />
            </a>
          </div>
        </div>
      </section>
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
