import React from 'react'
import Links from '../constants/links'
import logo from '../assets/logo_text.svg'
import email from '../assets/email.svg'
import github from '../assets/github.svg'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <img src={logo} alt='LudoLoops logo' className='logoText' />
      <Links />
      <div className='email'>
        <img src={email} alt='email icon' />
        <span> ludoloops@protonmail.com</span>
      </div>
      <div className='github'>
        <img src={github} alt='github  icon' />
      </div>
    </nav>
  )
}

export default Navbar
