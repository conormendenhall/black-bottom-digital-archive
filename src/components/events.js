import React from 'react'
import Loadable from 'react-loadable'
import Moment from 'react-moment'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import RichText from '../components/rich-text'

const Events = () => {
  const { events } = useStaticQuery(graphql`
    query EventsQuery {
      events: allContentfulEvent(
        sort: { fields: [dateAndTime], order: ASC }
        limit: 4
      ) {
        edges {
          node {
            id
            title
            slug
            dateAndTime
            body {
              json
            }
            image {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const today = new Date(new Date().toDateString())

  let upcomingEvents = events.edges
    .filter(event => Date.parse(event.node.dateAndTime) >= today)
    .map((item, key) => (
      <a href={`../events/${item.node.slug}`} key={key}>
        <div key={item.node.id} className="event">
          {item.node.image && (
            <Img fluid={item.node.image.fluid} className="event-image" />
          )}
          <div className="event-body">
            <div className="headline">
              <h3 className="title">{item.node.title}</h3>
              <Moment format="MMMM Do, YYYY">{item.node.dateAndTime}</Moment>
            </div>
            <div>
              {item.node.body?.json && <RichText data={item.node.body} />}
            </div>
          </div>
        </div>
      </a>
    ))

  let calendarEvents = events.edges.map(event => ({
    title: event.node.title,
    date: event.node.dateAndTime,
    slug: event.node.slug,
  }))

  const Calendar = Loadable({
    loader: () => import('./calendar'),
    loading() {
      return <div>Loading event calendar...</div>
    },
  })

  return (
    <div id="events">
      <h1>Upcoming Events</h1>
      <div className="upcoming-events">{upcomingEvents}</div>
      <div className="event-calendar">
        <Calendar data={calendarEvents} />
      </div>
    </div>
  )
}

export default Events
