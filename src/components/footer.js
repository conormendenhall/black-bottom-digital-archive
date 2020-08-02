import React from 'react'

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <section>
        <h3>Connect</h3>
        <div className="social">
          <a
            href="http://twitter.com/_blackbottom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter title="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/BlackBottomArchives/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook title="Facebook" />
          </a>
          <a
            href="http://www.instagram.com/blackbottomarchives"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram title="Instagram" />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
