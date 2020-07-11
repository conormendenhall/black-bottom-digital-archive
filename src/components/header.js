import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/" id="home">
      <span>{siteTitle}</span>
    </a>
    <a href="/themes">
      <span>Themes</span>
    </a>
    <a href="/about">
      <span>About</span>
    </a>
    <a href="/historical-sites">
      <span>Historical Sites</span>
    </a>
    <a href="/interviews">
      <span>Interviews</span>
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
