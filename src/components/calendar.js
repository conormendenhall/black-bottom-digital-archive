import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = ({ data }) => {
  const handleEventClick = e => {
    window.location.assign(`/events/${e.event.extendedProps.slug}`)
  }

  return (
    <div>
      <FullCalendar
        eventClick={handleEventClick}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
      />
    </div>
  )
}

export default Calendar
