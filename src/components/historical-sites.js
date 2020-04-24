import React from 'react'

import '../styles/main.scss'

const HistoricalSites = ({ data }) => {
  let sites = data.sites.edges.map((item, key) => (
    <div key={item.node.id}>
      <h3>{item.node.title}</h3>
      <p>{item.node.abstract.abstract}</p>
    </div>
  ))

  return (
    <div className="historical-sites">
      <h1>Historical Sites</h1>
      {sites}
    </div>
  )
}

export default HistoricalSites
