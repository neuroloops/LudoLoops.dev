import * as React from 'react'

import { isMobile } from 'react-device-detect'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Desktop from '../components/resume/desktop'
import Mobile from '../components/resume/mobile'

const Resume = () => {
  console.log(isMobile)
  return <Layout> {isMobile ? <Mobile /> : <Desktop />} </Layout>
}

export default Resume
