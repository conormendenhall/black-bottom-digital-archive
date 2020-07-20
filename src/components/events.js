import React from 'react'
import Loadable from 'react-loadable'
import Moment from 'react-moment'

import Img from 'gatsby-image'

const Events = ({ data }) => {
  let eventList = data.edges.map((item, key) => (
    <div key={item.node.id} className="event">
      {item.node.eventImage && (
        <Img fluid={item.node.eventImage.fluid} className="event-image" />
      )}
      <div className="event-body">
        <div className="headline">
          <h3 className="title">{item.node.title}</h3>
          <Moment format="MMMM Do, YYYY">{item.node.dateAndTime}</Moment>
        </div>
        <div>{item.node.description.description}</div>
      </div>
    </div>
  ))

  let events = data.edges.map((item, key) => ({
    id: key,
    title: item.node.title,
    date: item.node.dateAndTime,
    description: item.node.description.description,
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
      <div className="events">
      {eventList}</div>
      <div className="event-calendar">
        <Calendar data={events} />
      </div>
    </div>
  )
}

export default Events
