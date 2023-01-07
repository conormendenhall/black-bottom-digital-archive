import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Team from '../components/team'
import Contact from '../components/contact'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Black Bottom Archives" />
      <div className="about-header">
        <section className="container">
          <h1>About Black Bottom Archive</h1>
          <p>
            Black Bottom Archives (BBA) is a community-driven media platform
            dedicated to centering and amplifying the voices, experiences, and
            perspectives of Black Detroiters through digital storytelling,
            journalism, art, and community organizing with a focus on preserving
            local Black history & archiving our present.
          </p>
        </section>
      </div>
      <section className="container">
        <h2>Mission</h2>
        <p>
          To cultivate and support the development and preservation of media
          created by Black Detroiters for the sake of amplifying our voices,
          documenting our present realities, and transforming the dominant
          narratives about our city.
        </p>
        <h2>Vision</h2>
        <p>
          Black Bottom Archives (BBA) will be a go-to community hub that has
          consistent engagement on and offline with Black Detroiters (locally
          and across the Detroit Diaspora). BBA will have prominence as a
          radical, journalistic outlet for relevant and critical thought about
          local issues and perspectives, as well as a digital archiving and
          storytelling space that stores the history and present-day realities
          of Black Detroit.
        </p>
      </section>
      <section className="container">
        <Team />
      </section>
      <section className="container">
        <h2>Accessibility Statement</h2>
        <p>This is an accessibility statement from the Black Bottom Archive.</p>
        <p>
          <b>Conformance status</b>
          <br />
          The Web Content Accessibility Guidelines (WCAG) defines requirements
          for designers and developers to improve accessibility for people with
          disabilities. It defines three levels of conformance: Level A, Level
          AA, and Level AAA. Black Bottom Digital Archive is partially
          conformant with WCAG 2.0 level AA. Partially conformant means that
          some parts of the content do not fully conform to the accessibility
          standard.
        </p>
        <p>
          <b>Feedback</b>
          <br />
          We welcome your feedback on the accessibility of Black Bottom Digital
          Archive. Please let us know if you encounter accessibility barriers on
          Black Bottom Digital Archive:
        </p>
        <p>
          E-mail: hello@blackbottomarchives.com
          <br />
          We try to respond to feedback within 1 business day.
        </p>
        <p>
          <b>Date</b>
          <br />
          This statement was created on 24 January 2022 using the W3C
          Accessibility Statement Generator Tool.
        </p>
      </section>
      <Contact />
    </Layout>
  )
}

export default AboutPage
