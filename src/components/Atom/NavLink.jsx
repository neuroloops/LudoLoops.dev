import React from "react"
import navItems from "../../content/navItems.json"
import goToLink from "./goToLink"

const NavLink = ({ setBurger }) => {
  return (
    <>
      {navItems.map((item, index) => {
        return (
          <li
            className="cursor-pointer "
            key={index}
            onClick={() => {
              goToLink(item)
              if (setBurger) {
                setBurger(false)
              }
            }}
          >
            {item}
          </li>
        )
      })}
    </>
  )
}

export default NavLink
