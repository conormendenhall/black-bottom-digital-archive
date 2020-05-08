import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/" id="home">{siteTitle}</a>
    <a href="/about">About</a>
    <a href="/historical-sites">Historical Sites</a>
    <a href="/interviews">Interviews</a>
    <a href="/media">Media</a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
