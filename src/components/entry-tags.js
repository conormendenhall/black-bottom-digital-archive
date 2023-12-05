import React from 'react'

const EntryTags = ({ data }) => {
  const tags = data?.map((tag) => {
    return (
      <a
        key={tag.id}
        className="tag"
        href={`/tags/${tag.slug}`}
        aria-label={'Go to tag ' + tag.title}
      >
        <div>
          <span>{tag.title}</span>
        </div>
      </a>
    )
  })
  return <div className="entry-tags">{tags}</div>
}

export default EntryTags
