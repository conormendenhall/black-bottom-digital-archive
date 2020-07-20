import React from 'react'
import Loadable from 'react-loadable'
import Moment from 'react-moment'

import Img from 'gatsby-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Events = ({ data }) => {
  let eventList = data.edges.map((item, key) => (
    <a href={`events/${item.node.slug}`}>
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
            {item.node.body?.json &&
              documentToReactComponents(item.node.body.json)}
          </div>
        </div>
      </div>
    </a>
  ))

  let events = data.edges.map((item, key) => ({
    id: key,
    title: item.node.title,
    date: item.node.dateAndTime,
  }))

  const Calendar = Loadable({
    loader: () => import('./calendar'),
    loading() {
      return <div>Loading...</div>
    },
  })

  return (
    <div>
      <h1>News and Upcoming Events</h1>
      <div className="events">{eventList}</div>
      <div className="event-calendar">
        <Calendar data={events} />
      </div>
    </div>
  )
}

export default Events
