import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      .then(() => navigate('/thank-you/'))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Head title="Contact" />
      <div className="contact-header">
        <section className="container">
          <h1>Contact</h1>
          <p>
            Have any questions, comments, or suggestions about Black Bottom
            Digital Archive? Please contact us by filling in the form below or
            sending a message to us at hello@blackbottomarchives.com.
          </p>
        </section>
      </div>
      <section className="container">
        <p>*Required</p>
        <form
          name="contact"
          action="/contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />
          <p>
            <label>
              First Name <input type="text" name="firstName" />
            </label>
            <label>
              Last Name <input type="text" name="lastName" />
            </label>
          </p>
          <p>
            <label>
              Email* <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Subject* <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Message* <textarea name="message" required></textarea>
            </label>
          </p>
          <div className="button-section">
            <button type="submit" className="button">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
