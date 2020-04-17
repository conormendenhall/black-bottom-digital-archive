import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

class EventCalendar extends React.Component {
  handleEventClick = e => {
    console.log('====================================')
    console.log(
      `title:${e.event.title} description:${e.event.extendedProps.description}`
    )
    console.log('====================================')
  }
  render() {
    const events = [
      {
        title: 'event 1',
        start: '2020-04-16T13:13:55.008',
        end: '2020-04-16T13:13:55.008',
        description: 'this is my event',
      },
      {
        title: 'event 2',
        start: '2020-04-16T13:13:55.008',
        end: '2020-04-17T13:13:55.008',
        description: 'this is another event',
      },
      {
        title: 'event 3',
        start: '2020-04-16T13:13:55.008',
        end: '2020-04-18T13:13:55.008',
        description: 'this is random event',
      },
    ]
    return (
      <div>
        <FullCalendar
          eventClick={this.handleEventClick}
          defaultView="dayGridMonth"
          eventClick={this.handleEventClick}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
        />
      </div>
    )
  }
}

export default EventCalendar
