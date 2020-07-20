import React from 'react'

import Img from 'gatsby-image'

const TeamMember = ({ data }) => {
  return (
    <div className="team-member">
      <Img fluid={data.image} className="team-member-image" />
      <div className="team-member-body">
        <h3>{data.name}</h3>
        <div>{data.description}</div>
      </div>
    </div>
  )
}

export default TeamMember
