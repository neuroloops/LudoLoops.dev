import React from "react"

import Footer from "../components/Footer/"
import Hero from "../components/Hero/"

import About from "../components/About/"
import Demo from "../components/Demo/"
import Skills from "../components/Skills/"
import Projects from "../components/Projects/"
import Header from "../components/Header/"
import ContactMe from "../components/ContactMe"

import { MyButton } from "../components/Atom/MyButton"

const IndexPage = ({ color }) => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Test /> */}
      <Skills />
      <Projects />
      <Demo />
      <ContactMe />
      <Footer />
    </>
  )
}

export default IndexPage
