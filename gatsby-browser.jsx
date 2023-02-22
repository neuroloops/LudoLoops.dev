import React, { useState } from "react"

import Main from "./src/pages"

export const wrapPageElement = ({ props }) => {
  const [color, setColor] = useState("#142345")

  const changeBackground = () => {
    if (window.scrollY != 0) {
      setColor("#02023d")
    } else {
      setColor("#142345")
    }
  }

  window.addEventListener("scroll", changeBackground)

  window.onload = () => {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <Main
      {...props}
      color={color}
    ></Main>
  )
}
