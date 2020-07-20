import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>
          Did you or your family members live, work, or play in Black Bottom? Do
          you have stories, photos or other media to share? Please contact us
          for more information about how you can contribute to this growing
          digital archive.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="call-to-action">
            <span>Share Your History</span>
          </div>
        </a>
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use this form to submit your oral histories or photos.
          </a>
        </p>
        <p>
          <a
            href="https://calendly.com/pgwatkins/oralhistoryinterviews?month=2020-07"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use this link to schedule an oral history interview with our
            Archival team!
          </a>
        </p>
        <p>
          Contact us directly if you have any other media or artifacts that you
          would like to share
          <a href="mailto:hello@blackbottomarchives.com?subject=BBA Content Submission">
            <p>hello@blackbottomarchives.com</p>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
