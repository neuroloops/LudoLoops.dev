import * as React from 'react'
// import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Desktop from '../components/resume/desktop'
import Mobile from '../components/resume/mobile'

const Resume = () => {
  let isMobile = true
  // isMobile = useMediaQuery({ query: `(min-width: 1024px)` })

  console.log('isMobile', isMobile)

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
