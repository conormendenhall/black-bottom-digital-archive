import React from 'react'

import Layout from '../components/layout'

const FooPage = () => {
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
      <section className="container">
        <h1>Test Form</h1>
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

export default FooPage
