import React from 'react'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <img
            src={node.data.target.fields.file['en-US'].url}
            className="article-embedded-image"
          />
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

  return <>{data?.json && documentToReactComponents(data.json, options)}</>
}

export default RichText
