import React from 'react'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const RichText = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_2]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_3]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
            className="article-embedded-image"
          />
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { photo, altText, imageCaption } = node.data.target
        return (
          <>
            {photo && (
              <GatsbyImage
                image={getImage(photo.gatsbyImageData)}
                className="article-embedded-image"
                alt={altText}
              />
            )}
            {imageCaption && (
              <p className="image-caption">{imageCaption.imageCaption}</p>
            )}
          </>
        )
      },
    },
    renderLink: {
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.url}>{children}</a>
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
  }

  return (
    <div className="rich-text">{data && renderRichText(data, options)}</div>
  )
}

export default RichText
