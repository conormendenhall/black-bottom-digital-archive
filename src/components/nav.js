import React from 'react'
import Modal from 'react-modal'
import { HiSearch } from 'react-icons/hi'

import Search from './search'

Modal.setAppElement(`#___gatsby`)

const Nav = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const customStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.85)',
    },
    content: {
      top: '0',
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

  function afterOpenModal() {
    document.getElementsByClassName('ais-SearchBox-input')[0].focus()
  }

  function toggleMenu() {
    let nav = document.getElementById('mobileNav')
    nav.classList.toggle('nav-open')
  }

  return (
    <>
      <nav id="mainNav" className="flex-center">
        <a href="/" id="home">
          <span>Main</span>
        </a>
        <a href="/historical-figures">
          <span>Historical Figures</span>
        </a>
        <a href="/historical-sites">
          <span>Historical Sites</span>
        </a>
        <a href="/oral-histories">
          <span>Oral Histories</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/submissions">
          <span>Submissions</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
        <a href="#" className="search-button" onClick={openModal}>
          <HiSearch title="search" />
        </a>
        <a href="#" id="menuBtn" className="flex-center" onClick={toggleMenu}>
          <span>Menu</span>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Search"
        >
          <Search />
        </Modal>
      </nav>
      <nav id="mobileNav" className="flex-center">
        <a href="/" id="home">
          <span>Main</span>
        </a>
        <a href="/historical-figures">
          <span>Historical Figures</span>
        </a>
        <a href="/historical-sites">
          <span>Historical Sites</span>
        </a>
        <a href="/oral-histories">
          <span>Oral Histories</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/submissions">
          <span>Submissions</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
        <a href="#" className="search-button" onClick={openModal}>
          <span>Search</span>
        </a>
      </nav>
    </>
  )
}

export default Nav
