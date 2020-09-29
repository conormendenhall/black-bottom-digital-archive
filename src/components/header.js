import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/" id="home">
      <span>{siteTitle}</span>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
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

export default Header
