import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import '../styles/main.scss'

const Events = ({ data }) => {
  let eventList = data.edges.map((item, key) => (
    <h3 key={item.node.id}>{item.node.title}</h3>
  ))

  let calendarEvents = data.edges.map((item, key) => ({
    id: key,
    title: item.node.title,
    date: item.node.dateAndTime
  }))

  function handleEventClick(arg) {
    alert(arg.event.title)
  }

  return (
    <div>
      <h1>News and Upcoming Events</h1>
      <div>{eventList}</div>
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
