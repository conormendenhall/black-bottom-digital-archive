import React from 'react'

const Header = () => (
  <header>
    <a href="/" id="home">
      <span>Main</span>
    </a>
    <a href="/historical-figures" className="menu-link hide">
      <span>Historical Figures</span>
    </a>
    <a href="/historical-sites" className="menu-link hide">
      <span>Historical Sites</span>
    </a>
    <a href="/oral-histories" className="menu-link hide">
      <span>Oral Histories</span>
    </a>
    <a href="/about" className="menu-link hide">
      <span>About</span>
    </a>
    <a href="/" className="menu-link hide">
      <span>Submissions</span>
    </a>
    <a href="/" className="menu-link hide">
      <span>Contact</span>
    </a>
    <a id="menuBtn" onClick={toggleMenu}>
      Menu
    </a>
  </header>
)

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
