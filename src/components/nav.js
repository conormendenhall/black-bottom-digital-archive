import React from 'react'
import Modal from 'react-modal'
import { HiSearch } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'

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

  function toggleMenu() {
    let nav = document.getElementById('mobileNav')
    let closeButton = document.getElementById('closeMenuButton')
    nav.classList.toggle('nav-open')
    closeButton.classList.toggle('hidden')
  }

  function openModal() {
    setIsOpen(true)
  }

  function openModalMobile() {
    setIsOpen(true)
    toggleMenu()
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {
    document.getElementsByClassName('ais-SearchBox-input')[0].focus()
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
        <a href="#" className="search-button hover-primary" onClick={openModal}>
          <HiSearch title="search" />
        </a>
        <a href="#" id="menuBtn" className="flex-center" onClick={toggleMenu}>
          <span>Menu</span>
        </a>
        <a
          href="#"
          id="closeMenuButton"
          className="flex-center hidden"
          onClick={toggleMenu}
        >
          <IoCloseSharp title="Close Menu" />
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
        <a href="#" className="search-button" onClick={openModalMobile}>
          <span>Search</span>
        </a>
      </nav>
    </>
  )
}

export default Nav
