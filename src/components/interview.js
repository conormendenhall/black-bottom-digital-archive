import React from 'react'

const Interview = ({ data }) => {
  let interviews = data.edges.map((item, key) => (
    <div key={item.node.id}>
      <h3>{item.node.title}</h3>
      <pre>{item.node.text.text}</pre>
    </div>
  ))
  return (
    <div>
      <h1>Interviews</h1>
      {interviews}
    </div>
  )
}

export default Interview
