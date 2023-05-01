import React from "react"
import NavLink from "./Atom/NavLink"

const Footer = () => {
  const items = ["About"]
  return (
    <footer className=" flex  w-full bg-llBlack-500 pb-20 pt-4 text-xs font-bold text-white ">
      <ul className="flex w-2/4 gap-10 pl-10 ">
        <NavLink />
      </ul>
      LudoLoops &copy;{new Date().getFullYear()}
    </footer>
  )
}

export default Footer
