import React from "react"

import About from "./About"
import Demo from "./Demo"
import Skills from "./Skills"
import Projects from "./Projects"

import ContactMe from "./ContactMe"

const IndexPage = ({ color }) => {
  return (
    <main>
      <About />
      {/* <Test /> */}
      <Skills />
      <Projects />
      <Demo />
      <ContactMe />
    </main>
  )
}

export default IndexPage
