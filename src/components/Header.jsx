import React from "react"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <Helmet>
      <meta
        name="description"
        content="LudoLoops portfolio"
      />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, React, Portfolio, OpenAI, Web3, Frontend development, Web3 development, NFT"
      ></meta>
      <link
        rel="icon"
        href="/favicon.svg"
      />
      <title>LudoLoops.dev</title>
    </Helmet>
  )
}

export default Header
