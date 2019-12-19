import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <span>{siteTitle}</span>
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
