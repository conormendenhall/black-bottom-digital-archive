import React from 'react'

const HomeHeader = () => {
  return (
    <>
      <header className="basic home">
        <a href="/" id="home">
          <span>Black Bottom Digital Archive</span>
        </a>
        <a href="/historical-map" className="menu-link hide">
          <span>Historical Map</span>
        </a>
        <a href="/historical-figures" className="menu-link hide">
          <span>Historical Figures</span>
        </a>
        <a href="/historical-sites" className="menu-link hide">
          <span>Historical Sites</span>
        </a>
        <a href="/interviews" className="menu-link hide">
          <span>Oral Histories</span>
        </a>
        <a href="/about" className="menu-link hide">
          <span>About</span>
        </a>
        <a id="menuBtn" onClick={toggleMenu}>
          Menu
        </a>
      </header>
      <header className="home-header">
        <div className="header-content">
          <div id="home">
            <div>Black Bottom</div>
            <div>Digital Archive</div>
          </div>
          <div id="description">
            Welcome to the Black Bottom Digital Archive, where the memories and
            experiences of those from the long-gone Black Bottom neighborhood
            are preserved for future generations. Here you will find oral
            history interviews, historical documents and media from the
            neighborhood, and entries about historical sites and figures and
            events.
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
    </>
  )
}

function toggleMenu() {
  let links = document.getElementsByClassName('menu-link')

  for (let i = 0; i < links.length; i++) {
    if (links[i].className.includes('hide')) {
      links[i].className = 'menu-link show'
    } else {
      links[i].className = 'menu-link hide'
    }
  }
}

export default HomeHeader
