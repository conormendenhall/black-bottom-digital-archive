import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const SubmissionsPage = () => {
  return (
    <Layout>
      <Head title="Submissions" />
      <div className="share-header">
        <section className="container">
          <h1>Share with the Black Bottom Archives Community</h1>
          <p>
            Did you or your family members live, work, or play in Black Bottom?
            <br />
            Do you have stories, photos or other media to share?
          </p>
        </section>
      </div>
      <section className="container">
        <h2>I'd like to share an oral history.</h2>
        <p>Please complete the following steps:</p>
        <p>
          <ol>
            <li>
              Fill in the oral history{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4fk6G3nPZ6UkkK9IfHI9J3a5HQBeqg6oKmWrR8uNgfNyk1w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="oral-history-link"
              >
                Google form
              </a>{' '}
              with the interviewee name.
            </li>
            <li>Complete the interview release form.</li>
            <li>
              Select a time that is most convenient for you from the calendar on
              the right.
            </li>
          </ol>
        </p>
      </section>
      <div className="share-form">
        <section className="container">
          <h2>I’d like to share photos, videos, or other materials.</h2>
          <p>
            Please complete the Google form below and upload your media to
            share. Once you upload the media, our team will review your
            submission and get back to you soon.
          </p>
        </section>
      </div>
      <section className="financially-support container">
        <h2>I'd like to financially support.</h2>
        <p>
          Black Bottom Archive relies on the support of our staff and
          volunteers. Your financial contribution will help sustain Black Bottom
          Digital Archive and Black Bottom Archive’s community sustainability.
        </p>
        <p>
          <em>*Clicking the link below will take you to an external page.</em>
        </p>
        <div className="button-section">
          <a
            href="https://alliedmedia.org/post/donate-to-black-bottom-archives-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button">
              Donate to Black
              <br /> Bottom Archives
            </div>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default SubmissionsPage
