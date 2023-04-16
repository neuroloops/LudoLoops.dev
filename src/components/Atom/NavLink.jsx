import React from "react"
import navItems from "../../content/navItems.json"
import goToLink from "./goToLink"

const NavLink = () => {
  return (
    <>
      {navItems.map((item, index) => {
        return (
          <li
            className="cursor-pointer "
            key={index}
            onClick={() => goToLink(item)}
          >
            {item}
          </li>
        )
      })}
    </>
  )
}

export default NavLink
