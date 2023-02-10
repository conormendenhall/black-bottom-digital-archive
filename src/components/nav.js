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
      zIndex: '1',
    },
    content: {
      top: '0',
      bottom: 'auto',
      background: '#000',
      color: '$light',
      border: 'none',
    },
  }
  const closeSearchButton = document.getElementById('closeSearchButton')

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
    closeSearchButton.classList.remove('hidden')
    setTimeout(() => {
      document.getElementsByClassName('ais-SearchBox-input')[0]?.focus()
    }, 10)
  }

  function afterCloseModal() {
    closeSearchButton.classList.add('hidden')
  }

  return (
    <>
      <nav id="mainNav" className="flex-center">
        <a href="/">
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
        <a href="http://www.blackbottomarchives.com/contact-us">
          <span>Contact</span>
        </a>
        <button className="search-button hover-primary" onClick={openModal}>
          <HiSearch title="search" />
        </button>
        <button id="menuBtn" className="flex-center" onClick={toggleMenu}>
          <span>Menu</span>
        </button>
        <button
          id="closeMenuButton"
          className="flex-center hidden"
          onClick={toggleMenu}
        >
          <IoCloseSharp title="Close Menu" />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          onAfterClose={afterCloseModal}
          style={customStyles}
          contentLabel="Search"
        >
          <Search />
        </Modal>
        <button
          id="closeSearchButton"
          className="flex-center hidden"
          onClick={closeModal}
        >
          <IoCloseSharp title="Close Search" />
        </button>
      </nav>
      <nav id="mobileNav" className="flex-center">
        <a href="/">
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
        <a href="http://www.blackbottomarchives.com/contact-us">
          <span>Contact</span>
        </a>
        <button className="search-button" onClick={openModalMobile}>
          <span>Search</span>
        </button>
      </nav>
    </>
  )
}

export default Nav
