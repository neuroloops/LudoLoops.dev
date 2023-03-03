import React, { useState } from "react"
import Main from "./src/pages"
import Navbar from "./src/components/Navbar/"

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
      <Navbar color={color} />
      <input
        type="checkbox"
        className="toggle toggle-primary"
      />

      <Main
        {...props}
        color={color}
      ></Main>
    </>
  )
}
