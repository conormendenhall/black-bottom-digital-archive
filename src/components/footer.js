import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className="footer-content">
          <a href="/historical-figures">
            <h4 className="footer-button">Historical Figures</h4>
          </a>
          <a href="/oral-histories">
            <h4 className="footer-button">Oral Histories</h4>
          </a>
          <a href="/historical-sites">
            <h4 className="footer-button">Historical Sites</h4>
          </a>
          <a href="/about">
            <h4 className="footer-button">About</h4>
          </a>
          <a href="/bibliography">
            <h4 className="footer-button">Sources</h4>
          </a>
          <h4 id="copyright">
            Copyright © {new Date().getFullYear()} Black Bottom Archives
          </h4>
        </div>
        <StaticImage
          src="../images/amp-logo.png"
          id="ampLogo"
          alt="Badge for AMP Sponsored Project"
          layout="fixed"
          width={100}
          height={100}
        />
        <div className="social">
          <a
            href="http://twitter.com/_blackbottom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Black Bottom Archives Twitter"
          >
            <AiOutlineTwitter title="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/BlackBottomArchives/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Black Bottom Archives Facebook"
          >
            <AiFillFacebook title="Facebook" />
          </a>
          <a
            href="http://www.instagram.com/blackbottomarchives"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Black Bottom Archives Instagram"
          >
            <AiOutlineInstagram title="Instagram" />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
