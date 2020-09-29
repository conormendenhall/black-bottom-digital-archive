import React from 'react'

import Img from 'gatsby-image'

const Card = ({ url, data }) => {
  return (
    <a href={`${url}${data.slug}`} className="card">
      <div className="card-body">
        <div className="card-title">
          <span>{data.title}</span>
        </div>
        {data.image && (
          <div className="card-image">
            <Img fluid={data.image.fluid} />
          </div>
        )}
      </div>
    </a>
  )
}

export default Card
