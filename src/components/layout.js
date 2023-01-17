import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
