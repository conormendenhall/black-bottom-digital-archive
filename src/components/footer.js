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
            <h4 id="bibliographyLink">Historical Figures</h4>
          </a>
          <a href="/interviews">
            <h4 id="bibliographyLink">Oral Histories</h4>
          </a>
          <a href="/historical-sites">
            <h4 id="bibliographyLink">Historical Sites</h4>
          </a>
          <a href="/about">
            <h4 id="bibliographyLink">About</h4>
          </a>
          <a href="/bibliography">
            <h4 id="bibliographyLink">Sources</h4>
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
          >
            <AiOutlineTwitter title="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/BlackBottomArchives/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook title="Facebook" />
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
