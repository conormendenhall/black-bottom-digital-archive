import React from 'react'

import Img from 'gatsby-image'

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        {data.node.image && <Img fluid={data.node.image.fluid} />}
      </div>
      <div className="card-title">
        <span>{data.node.title}</span>
      </div>
    </div>
  )
}

export default Card
