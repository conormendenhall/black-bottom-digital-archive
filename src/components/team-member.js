import React from 'react'

import Img from 'gatsby-image'

const TeamMember = ({ data }) => {
  return (
    <div className="team-member">
      <Img fluid={data.image} className="team-member-image" />
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
