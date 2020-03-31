import React from 'react'

import Img from 'gatsby-image'

const Team = ({ data }) => {
  return (
    <div className="team">
      <h1>The Black Bottom Archives Team</h1>
      <div className="team-container">
        <div className="team-member">
          <Img fluid={data.kamau.childImageSharp.fluid} />
          <h3>Kamau Baaqi, Communications Associate</h3>
          <p>
            Kamau Baaqi is a composer, multimedia artist, and communications
            specialist. Having contributed to creative industries for over a
            decade, Kamau continues to establish and cultivate narratives
            through the arts.
          </p>
        </div>
        <div className="team-member">
          <Img fluid={data.tulani.childImageSharp.fluid} />
          <h3>Tulani Pryor, Digital Archive Assistant</h3>
          <p>
            Tulani Pryor is an artist, writer, and aspiring archivist with a
            B.A. in Visual Arts. She is an avid storyteller who is dedicated to
            collecting and utilizing archival materials to represent the
            creativity and beauty of people of color. In her spare time, she
            loves to make moodboards of the worlds she writes about.
          </p>
        </div>
        <div className="team-member">
          <Img fluid={data.pg.childImageSharp.fluid} />
          <h3>PG Watkins, Director</h3>
          <p>
            Paige PG Watkins (they/them) is a nonbinary organizer, facilitator
            and organizational strategist from Detroit. PG believes that
            organizing and storytelling are interconnected and is committed to
            using both mediums to shift dominant oppressive narratives and
            change the material conditions of Black people in Detroit and
            beyond. Their experience with organizational development, grassroots
            organizing and facilitating intergenerational healing and visionary
            spaces has given them the tools to lead BBA through a collaborative
            strategic planning process and create goals and priorities that will
            sustain BBA’s work and the legacy of Black Detroiters across time.
          </p>
        </div>
        <div className="team-member">
          <Img fluid={data.lawrielle.childImageSharp.fluid} />
          <h3>Lawrielle West, Community Engagement Coordinator</h3>
          <p>
            Lawrielle West is a Organizer hailing from the Westside of Detroit.
            During the last 5 years she’s grown to sharpen her Black Queer
            Feminist politic through BYP100, Association of Black Social Workers
            and other grassroots organizing projects. She has experience in
            operations, fundraising, communications, digital organizing and
            leadership development. As an Aries she brings her power, directness
            and passion to the BBA team and is excited to do outreach and
            community programming this upcoming year!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
