import React from 'react'
import Loadable from 'react-loadable'
import Moment from 'react-moment'

import Img from 'gatsby-image'

import '../styles/main.scss'

const Events = ({ data }) => {
  let eventList = data.edges.map((item, key) => (
    <div key={item.node.id} className="event">
      {item.node.eventImage && <Img fluid={item.node.eventImage.fluid} />}
      <div className="headline">
        <h3 className="title">{item.node.title}</h3>
        <Moment format="MMMM Do, YYYY">{item.node.dateAndTime}</Moment>
      </div>
      <p>{item.node.description.description}</p>
    </div>
  ))

  let calendarEvents = data.edges.map((item, key) => ({
    id: key,
    title: item.node.title,
    date: item.node.dateAndTime,
  }))

  function handleEventClick(arg) {
    alert(arg.event.title)
  }

  const LoadableCalendar = Loadable({
    loader: () => import('../components/eventCalendar'),
    loading() {
      return <div>Loading...</div>
    },
  })

  return (
    <div className="events">
      <h1>News and Upcoming Events</h1>
      {eventList}
      <LoadableCalendar />
      {/* <FullCalendar
        eventClick={handleEventClick}
        defaultView="dayGridMonth"
        events={calendarEvents}
        plugins={[dayGridPlugin, interactionPlugin]}
      /> */}
    </div>
  )
}

export default Events
