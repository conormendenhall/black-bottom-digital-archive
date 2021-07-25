import React from 'react'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          node.data.target.fields.file['en-US']?.url && (
            <img
              src={node.data.target.fields.file['en-US'].url}
              className="article-embedded-image"
            />
          )
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        return (
          node.data.target.fields.photo['en-US'] &&
          node.data.target.fields.altText['en-US'] &&
          node.data.target.fields.imageCaption['en-US'] && (
            <>
              <img
                src={
                  node.data.target.fields.photo['en-US'].fields.file['en-US']
                    .url
                }
                className="article-embedded-image"
                alt={node.data.target.fields.altText['en-US']}
              />
              <p className="image-caption">
                {node.data.target.fields.imageCaption['en-US']}
              </p>
            </>
          )
        )
      },
    },
    renderLink: {
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.url}>{children}</a>
      },
    },
    renderMark: {
      [MARKS.BOLD]: text => <b>{text}</b>,
      [MARKS.ITALIC]: text => <i>{text}</i>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
    },
  }

  return (
    <div className="rich-text">
      {data?.json && documentToReactComponents(data.json, options)}
    </div>
  )
}

export default RichText
