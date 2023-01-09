import React from 'react'

import Layout from '../components/layout'

const FooPage = () => (
  <Layout>
    <section className="container">
      <h1>Test Form</h1>
      <p>*Required</p>
      <form name="contact" data-netlify="true">
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

export default FooPage
