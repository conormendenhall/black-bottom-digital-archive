import React from 'react'

const Events = ({ data }) => {
  let events = data.edges.map((item, key) =>
    <h2 key={item.node.id}>{item.node.title}</h2>
  );

  return (
    <div>
      <h1>News and Upcoming Events</h1>
      <div>
        {events}
      </div>
    </div>
  )
}

export default Events
