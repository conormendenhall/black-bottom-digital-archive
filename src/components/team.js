import React from 'react'

import Img from 'gatsby-image'

import TeamMember from './team-member'

const Team = ({ data }) => {
  const teamMembers = [
    {
      name: 'Kamau Baaqi',
      title: 'Communications Associate',
      bio: `Kamau Baaqi is a composer, multimedia artist, 
      and communications specialist. Having contributed to 
      creative industries for over a decade, Kamau continues to 
      establish and cultivate narratives through the arts.`,
      image: data.kamau.childImageSharp.fluid,
    },
    {
      name: 'Tulani Pryor',
      title: 'Digital Archive Assistant',
      bio: `Tulani Pryor is an artist, writer, and aspiring archivist with a
      B.A. in Visual Arts. She is an avid storyteller who is dedicated to
      collecting and utilizing archival materials to represent the
      creativity and beauty of people of color. In her spare time, she
      loves to make moodboards of the worlds she writes about.`,
      image: data.tulani.childImageSharp.fluid,
    },
    {
      name: 'PG Watkins',
      title: 'Director',
      bio: `Paige PG Watkins (they/them) is a nonbinary organizer, facilitator
      and organizational strategist from Detroit. PG believes that
      organizing and storytelling are interconnected and is committed to
      using both mediums to shift dominant oppressive narratives and
      change the material conditions of Black people in Detroit and
      beyond. Their experience with organizational development, grassroots
      organizing and facilitating intergenerational healing and visionary
      spaces has given them the tools to lead BBA through a collaborative
      strategic planning process and create goals and priorities that will
      sustain BBA’s work and the legacy of Black Detroiters across time.`,
      image: data.pg.childImageSharp.fluid,
    },
    {
      name: 'Lawrielle West',
      title: 'Community Engagement Coordinator',
      bio: `Lawrielle West is a Organizer hailing from the Westside of Detroit.
      During the last 5 years she’s grown to sharpen her Black Queer
      Feminist politic through BYP100, Association of Black Social Workers
      and other grassroots organizing projects. She has experience in
      operations, fundraising, communications, digital organizing and
      leadership development. As an Aries she brings her power, directness
      and passion to the BBA team and is excited to do outreach and
      community programming this upcoming year!`,
      image: data.lawrielle.childImageSharp.fluid,
    },
  ]

  return (
    <div className="team">
      <h1>The Black Bottom Archives Team</h1>
      <div className="team-container">
        {teamMembers.map((item, key) => (
          <TeamMember data={item} />
        ))}
      </div>
    </div>
  )
}

export default Team
