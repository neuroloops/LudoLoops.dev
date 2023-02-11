import React from "react"

import "../styles/global.scss"
import Footer from "../components/Footer"
import Hero from "../components/Hero/"
import Navbar from "../components/Navbar/"
import About from "../components/About/"
import Demo from "../components/Demo"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Demo />
      <Footer />
    </div>
  )
}

export default IndexPage
