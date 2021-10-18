import * as React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Projets from '../components/Projets'
import Skills from '../components/Skills'
import '../styles/main.scss'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projets />
    </Layout>
  )
}

export default IndexPage
