import React from 'react'

import { navigate } from 'gatsby'

import Layout from '../components/layout'

const FooPage = () => {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/'))
      .catch((error) => alert(error))
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  return (
    <Layout>
      <section className="container">
        <h1>Test Form</h1>
        <p>*Required</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />
          <p>
            <label>
              First Name{' '}
              <input type="text" name="firstName" onChange={handleChange} />
            </label>
            <label>
              Last Name{' '}
              <input type="text" name="lastName" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Email*{' '}
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Subject*{' '}
              <input
                type="text"
                name="subject"
                required
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message*{' '}
              <textarea
                name="message"
                required
                onChange={handleChange}
              ></textarea>
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
