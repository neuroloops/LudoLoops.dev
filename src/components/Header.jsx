import React from "react"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <Helmet>
      <link
        rel="icon"
        href="/favicon.svg"
      />
      <title>LudoLoops.dev</title>
    </Helmet>
  )
}

export default Header
