import React from 'react'

import Img from 'gatsby-image'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import '../styles/main.scss'

const Events = ({ data }) => {
  let eventList = data.edges.map((item, key) => (
    <div key={item.node.id} className="event">
      <h3>{item.node.title}</h3>
      {item.node.eventImage && <Img fluid={item.node.eventImage.fluid} />}
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

  return (
    <div className="events">
      <h1>News and Upcoming Events</h1>
      {eventList}
      <FullCalendar
        eventClick={handleEventClick}
        defaultView="dayGridMonth"
        events={calendarEvents}
        plugins={[dayGridPlugin, interactionPlugin]}
      />
    </div>
  )
}

export default Events
