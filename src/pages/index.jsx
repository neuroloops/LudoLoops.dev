import React, { useState } from "react"

import Hero from "./Hero"
import About from "./About"
import Contact from "./Contact"
import Skills from "./Skills"
import Projects from "./Projects"
import Interest from "./Interest"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import nav from "../content/navItems.json"
import Footer from "../components/Footer"

const IndexPage = ({ color, email }) => {
  const [burgerOpen, setBurger] = useState(false)

  return (
    <>
      <Header />
      <Navbar {...{ color, email, burgerOpen, setBurger }} />
      <Hero />
      <main>
        <About id={nav[0]} />
        <Skills id={nav[1]} />
        <Projects id={nav[2]} />
        <Contact id={nav[3]} />
        <Interest id={nav[4]} />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
