import React, { useState } from "react"
import Index from "./src/pages/"
import "./src/styles/global.scss"

export const wrapPageElement = ({ props }) => {
  // to limit spam,  encrypt email then display the real one with js when the page is loaded

  const encEmail = window.btoa("ludoloops@pm.me")
  const [email, setEmail] = useState(encEmail)
  const [color, setColor] = useState("#02025e")

  const changeBackground = () => {
    if (window.scrollY != 0) {
      setColor("#02023d")
    } else {
      setColor("#02025e")
    }
  }

  window.onload = () => {
    window.addEventListener("scroll", changeBackground)
    setEmail(window.atob(encEmail))
    console.log("page is fully loaded")
  }

  window.addEventListener("load", (event) => {
    console.log("page is fully loaded with event listener")
  })

  return (
    <Index
      {...props}
      color={color}
      email={email}
    />
  )
}
