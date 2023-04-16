import React from "react"
import NavLink from "./Atom/NavLink"

const Footer = () => {
  const items = ["About"]
  return (
    <footer>
      <div className="flex w-full bg-llBlack-500 pb-20 text-xs font-bold text-white ">
        <ul className="flex w-2/4 gap-10 ">
          <NavLink />
        </ul>
        &copy;{new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
