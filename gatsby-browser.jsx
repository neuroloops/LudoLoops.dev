import React, { useState } from "react"
import Main from "./src/pages"

import Navbar from "./src/components/Navbar/"
import Hero from "./src/pages/Hero"
import Header from "./src/components/Header/"
import Footer from "./src/components/Footer/"

import "./src/styles/global.scss"
export const wrapPageElement = ({ props }) => {
  const [color, setColor] = useState("#142345")

  const changeBackground = () => {
    if (window.scrollY != 0) {
      setColor("#02023d")
    } else {
      setColor("#142345")
    }
  }

  window.onload = () => {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <>
      <Header />
      <Navbar color={color} />
      <Hero />

      <Main
        {...props}
        color={color}
      ></Main>

      <Footer />
    </>
  )
}
