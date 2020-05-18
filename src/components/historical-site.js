import React from 'react'

const HistoricalSite = ({ pageContext }) => {
  return (
    <div className="historical-site">
      <h1>{pageContext.title}</h1>
      <p>{pageContext.abstract.abstract}</p>
    </div>
  )
}

export default HistoricalSite
