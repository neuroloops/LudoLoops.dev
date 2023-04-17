import React, { useState } from "react"
import Index from "./src/pages/"
import "./src/styles/global.scss"

export const wrapPageElement = ({ props }) => {
  // to limit spam,  encrypt email then display the real one with js when the page is loaded

  // const encEmail = window.btoa("ludoloops@pm.me")

  const encEmail = "bHVkb2xvb3BzQHBtLm1l"

  const [email, setEmail] = useState(encEmail)
  // const [color, setColor] = useState("#02025e")

  // const changeBackground = () => {
  //   if (window.scrollY != 0) {
  //     setColor("#02023d")
  //   } else {
  //     setColor("#02025e")
  //   }
  // }

  return <Index {...props} />
}
