import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ url, data }) => {
  const image = getImage(data.image)

  return (
    <a href={`${url}${data.slug}`} className="card">
      <div className="card-body">
        <div className="card-title">
          <span>{data.title}</span>
        </div>
        {data.image && (
          <div className="card-image">
            <GatsbyImage image={image} />
          </div>
        )}
      </div>
    </a>
  )
}

export default Card
