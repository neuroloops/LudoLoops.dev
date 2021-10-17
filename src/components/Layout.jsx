import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`
