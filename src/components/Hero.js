import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import composition from '../assets/composition.svg'

const Hero = () => {
  return (
    <HeroWrapper className='hero'>
      <section>
        <Navbar />
        <HeroSection>
          <LeftSide>
            <h1>LudoLoops</h1>
            <h1>Full stack developer</h1>

            <Subtext>Frontend • Backend • Devops • Tools</Subtext>

            <ContactMe className='btn btn-clear'>Contact with me</ContactMe>
          </LeftSide>
          <aside>
            <img src={composition} alt='laptop with LudoLoops logo' />
          </aside>
        </HeroSection>
      </section>
    </HeroWrapper>
  )
}

export default Hero

const LeftSide = styled.div`
  padding-left: 110px;
`
const Subtext = styled.div`
  margin-top: 29px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`
const HeroSection = styled.section`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
const HeroWrapper = styled.div`
  background-color: #0c265b;
  width: 100%;
  background-size: contain;
  height: 692px;
  padding-top: 43px;
`

const ContactMe = styled.div`
  margin-top: 40px;
`
