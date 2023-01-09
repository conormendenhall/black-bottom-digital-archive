import React from 'react'

import { navigate } from 'gatsby'

import Layout from '../components/layout'

class FooPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.encode = this.encode.bind(this)
  }

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
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
      body: this.encode({
        'form-name': event.target.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/'))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="container">
          <h1>Test Form</h1>
          <p>*Required</p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="contact" value="contact" />
            <p>
              <label>
                First Name{' '}
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Last Name{' '}
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Email*{' '}
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  required
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Subject*{' '}
                <input
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  required
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Message*{' '}
                <textarea
                  name="message"
                  value={this.state.message}
                  required
                  onChange={this.handleChange}
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
}

export default FooPage
