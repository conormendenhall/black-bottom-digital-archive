import React from 'react'

import Img from 'gatsby-image'

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        {data.image && <Img fluid={data.image.fluid} />}
      </div>
      <div className="card-title">
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default Card
