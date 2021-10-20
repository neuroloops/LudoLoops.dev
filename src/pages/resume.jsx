import * as React from 'react'
// import { useMediaQuery } from 'react-responsive'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Desktop from '../components/resume/desktop'
import Mobile from '../components/resume/mobile'

import MediaQuery from 'react-responsive'
const Resume = () => {
  return (
    <Layout>
      <MediaQuery maxWidth={1024}>
        <Mobile />
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <Desktop />
      </MediaQuery>
    </Layout>
  )
}

export default Resume
