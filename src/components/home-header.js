import React from 'react'

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="header-content">
        <div id="home">
          <div>Black Bottom</div>
          <div>Digital Archive</div>
        </div>
        <div id="description">
          Welcome to the Black Bottom Digital Archive, where the memories and
          experiences of those from the long-gone Black Bottom neighborhood are
          preserved for future generations. Here you will find oral history
          interviews, historical documents and media from the neighborhood, and
          entries about historical sites and figures and events.
        </div>
        <div id="menu">
          <a href="/historical-map" id="historicalMapBtn">
            <span>Historical Map</span>
          </a>
          <a href="/historical-figures">
            <span>Historical Figures</span>
          </a>
          <a href="/historical-sites">
            <span>Historical Sites</span>
          </a>
          <a href="/interviews">
            <span>Oral Histories</span>
          </a>
          <a href="/about">
            <span>About</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
