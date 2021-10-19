import * as React from 'react'
import { useMediaQuery } from 'react-responsive'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Desktop from '../components/resume/desktop'
import Mobile from '../components/resume/mobile'

const Resume = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` })

  console.log(isMobile)
  return <Layout> {isMobile ? <Mobile /> : <Desktop />} </Layout>
}

export default Resume
