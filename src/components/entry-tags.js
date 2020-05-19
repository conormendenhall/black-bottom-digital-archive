import React from 'react'

const EntryTags = ({ data }) => {
  const tags = data?.map(tag => {
    return (
      <a key={tag.id} className="tag" href={`/tags/${tag.slug}`}>
        <div>
          <span>{tag.name}</span>
        </div>
      </a>
    )
  })
  return <div className="entry-tags">{tags}</div>
}

export default EntryTags
