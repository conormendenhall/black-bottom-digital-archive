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
          Black Bottom Archives (BBA) is a community-driven media platform
          dedicated to centering and amplifying the voices, experiences, and
          perspectives of Black Detroiters through digital storytelling,
          journalism, art, and community organizing with a focus on preserving
          local Black history & archiving our present.
        </div>
        <div id="menu">
          <a href="/themes">
            <span>Themes</span>
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
