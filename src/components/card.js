import React from 'react'

import Img from 'gatsby-image'

const Card = ({ url, data }) => {
  return (
    <a href={`${url}${data.slug}`}>
      <div className="card">
        <div className="card-title">
          <span>{data.title}</span>
        </div>
        <div className="card-image">
          {data.image && <Img fluid={data.image.fluid} />}
        </div>
      </div>
    </a>
  )
}

export default Card
