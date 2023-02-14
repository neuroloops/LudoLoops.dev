import React, { useState } from "react"
import { css } from "@emotion/react"
import { style } from "./style"

const Navbar = () => {
  const [color, setColor] = useState("#142345")

  const changeBackground = () => {
    if (window.scrollY != 0) {
      setColor("#02023d")
    } else {
      setColor("#142345")
    }
  }

  // const [link, useLink] = useState("")
  window.addEventListener("scroll", changeBackground)

  const goToLink = item => {
    let element = document.getElementById(item)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItem = ["About", "Skills", "Projects", "Demo", "Contacts"]

  return (
    <>
      <div id="navBar" />
      <div
        id="Navbar"
        css={css`
          ${style.bg};
          background: ${color};
        `}
      >
        <div css={style.wrapper}>
          <img
            src={"/navbar/logo_text.svg"}
            alt="Logo"
            css={css`
              cursor: pointer;
            `}
            onClick={() => goToLink("navBar")}
          />
          <nav>
            <ul>
              {navItem.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => goToLink(item)}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </nav>
          <div css={style.emailCtn}>
            <img
              src="/email.svg"
              alt="email logo"
            />
            <p>ludoloops@pm.me</p>
            <img
              src="/github.svg"
              alt="github logo"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
