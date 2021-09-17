import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Hero = () => {
  return (
    <section className='hero'>
      <Navbar />
      <h1>LudoLoops</h1>
      <h1>Full stack developer</h1>

      <h3>title h3</h3>
      <Subtext className='test'>frontend • Backend • Devops • Tools</Subtext>

      <div className='btn btn-clear'>Contact with me</div>
    </section>
  )
}

export default Hero

const Subtext = styled.div`
  color: red;
`
