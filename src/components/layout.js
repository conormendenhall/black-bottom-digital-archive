import React from 'react'

import Nav from './nav'
import Footer from './footer'
import '../styles/styles.scss'

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
