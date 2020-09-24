import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/" id="home">
      <span>{siteTitle}</span>
    </a>
    <a href="/historical-map">
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
    <a id="menuButton" className="closed" onClick={toggleMenu}></a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function toggleMenu() {
  let button = document.getElementById('menuButton')
  button.className = button.className === 'closed' ? 'open' : 'closed'
}

export default Header
