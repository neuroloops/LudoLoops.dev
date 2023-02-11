import React, { useState } from "react"
import { css } from "@emotion/react"
import { style } from "./style"

const Navbar = () => {
  const [navbar, setNavbar] = useState("#142345")

  const changeBackground = () => {
    if (window.scrollY != 0) {
      setNavbar("#02023d")
    } else {
      setNavbar("#142345")
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <div
      css={css`
        ${style.wrapper};
        background: ${navbar};
      `}
    >
      <img
        src={"/navbar/logo_text.svg"}
        alt="Logo"
      />
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Demo</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <p>ludoloops@pm.me</p>
    </div>
  )
}
export default Navbar
