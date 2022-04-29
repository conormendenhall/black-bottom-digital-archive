import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TeamMember = ({ data }) => {
  const image = getImage(data.image)
  
  return (
    <div className="team-member">
      <GatsbyImage image={image} className="team-member-image" />
      <div className="team-member-body">
        <div className="headline">
          <h3 className="name">{data.name}</h3>
          <div>{data.title}</div>
        </div>
        <div>{data.bio}</div>
      </div>
    </div>
  )
}

export default TeamMember
