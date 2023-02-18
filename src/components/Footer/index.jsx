import React from "react"
import { style } from "./style"

const Footer = () => {
  return (
    <footer css={style.footer}>
      <div className="footerNav">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
        &copy;{new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
