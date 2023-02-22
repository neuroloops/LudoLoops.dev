import React from "react"

import Footer from "../components/Footer/"
import Hero from "../components/Hero/"
import Navbar from "../components/Navbar/"
import About from "../components/About/"
import Demo from "../components/Demo/"
import Skills from "../components/Skills/"
import Projects from "../components/Projects/"
import Header from "../components/Header/"
import ContactMe from "../components/ContactMe"
import Layout from "../components/Layout.jsx"

const IndexPage = ({ color }) => {
  return (
    <Layout>
      <Navbar color={color} />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Demo />
      <ContactMe />
      <Footer />
    </Layout>
  )
}

export default IndexPage
