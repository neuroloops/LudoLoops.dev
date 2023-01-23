import React from "react"
import styled from "@emotion/styled"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { Navbar } from "../components/Navbar"
import About from "../components/About"
import Demo from "../components/Demo"
import Projects from "../components/Projects"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <About />
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
