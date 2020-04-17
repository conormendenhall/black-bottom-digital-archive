import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = ({ data }) => {
  function handleEventClick(e) {
    console.log(`title: ${e.event.title}
description: ${e.event.extendedProps.description}`  )
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
