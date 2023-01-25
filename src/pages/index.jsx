import React from "react"
import styled from "@emotion/styled"

import "../styles/global.css"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Demo from "../components/Demo"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Demo />

      <Footer />
    </Wrapper>
  )
}

export default IndexPage

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`
