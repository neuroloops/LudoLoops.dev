import React, { useState, useEffect } from "react"
import NavLink from "./Atom/NavLink"
import goToLink from "./Atom/goToLink"

const Navbar = () => {
  const encEmail = "bHVkb2xvb3BzQHBtLm1l"

  const [email, setEmail] = useState(encEmail)
  const [color, setColor] = useState("#02025e")

  if (typeof window !== `undefined`) {
    window.addEventListener("load", (event) => {
      console.log("page is fully loaded with event listener")
    })

    const changeBackground = () => {
      if (window.scrollY != 0) {
        setColor("#02023d")
      } else {
        setColor("#02025e")
      }
    }

    window.addEventListener("scroll", changeBackground)

    useEffect(() => {
      setEmail(window.atob(encEmail))
    }, [])
  }

  return (
    <>
      {/* because of sticky, need a fake div to be able to scroll to the top element */}
      <div id="navBar" />
      <div
        className="sticky top-0 z-30 gap-10 text-white"
        style={{ backgroundColor: color }}
      >
        <div className="flex h-20 items-center justify-evenly font-bold">
          <img
            src={"/navbar/logo_text.svg"}
            alt="Logo"
            className="cursor-pointer"
            onClick={() => goToLink("navBar")}
          />

          <nav>
            <ul className="flex gap-10 text-sm">
              <NavLink />
            </ul>
          </nav>
          <div className="mr-3 inline-flex cursor-pointer items-center">
            <img
              src="/email.svg"
              alt="email logo"
              className="ml-3 mr-3"
            />
            <a href={`mailto:${email}`}>{email}</a>
            <img
              className="ml-3 mr-3"
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
