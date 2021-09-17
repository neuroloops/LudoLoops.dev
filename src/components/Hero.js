import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className='hero'>
      <Navbar />
      <h1>title h1</h1>
      <h2>Almost before we knew it, we had</h2>
      <h3>title h3</h3>
      <p>Lorem ipsum dolor sit amet.</p>

      <div className='btn btn-clear'>Contact with me</div>
    </section>
  )
}

export default Hero
