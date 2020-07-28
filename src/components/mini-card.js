import React from 'react'

import Img from 'gatsby-image'

const MiniCard = ({ url, data }) => {
  return (
    <a href={`${url}${data.slug}`}>
      <div className="mini-card">
        <div className="title">
          <span>{data.title}</span>
        </div>
        {data.image && <Img fluid={data.image.fluid} />}
      </div>
    </a>
  )
}

export default MiniCard
