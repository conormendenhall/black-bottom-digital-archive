import React from 'react'
import Modal from 'react-modal'
import { HiSearch } from 'react-icons/hi'

import Search from './search'

Modal.setAppElement(`#___gatsby`)

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const customStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.85)',
    },
    content: {
      top: '3rem',
      left: '3rem',
      right: '3rem',
      bottom: 'auto',
      background: '#000',
      color: '$light',
      border: 'none',
    },
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
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

  return (
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
      <a href="/submissions" className="menu-link hide">
        <span>Submissions</span>
      </a>
      <a href="/contact" className="menu-link hide">
        <span>Contact</span>
      </a>
      <a id="searchButton" onClick={openModal}>
        <HiSearch title="search" />
      </a>
      <a id="menuBtn" onClick={toggleMenu}>
        Menu
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Search"
      >
        <button onClick={closeModal}>close</button>
        <Search />
      </Modal>
    </header>
  )
}

export default Header
