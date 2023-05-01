import React, { useState, useEffect } from "react"
import NavLink from "./Atom/NavLink"
import goToLink from "./Atom/goToLink"

const MenuItem = ({ setBurger }) => {
  return (
    <ul className="flex h-screen w-full flex-col items-center justify-between pt-5 [&>li]:p-4">
      <NavLink {...{ setBurger }} />
    </ul>
  )
}

const Navbar = ({ burgerOpen, setBurger }) => {
  const encEmail = "bHVkb2xvb3BzQHBtLm1l"
  const [email, setEmail] = useState(encEmail)
  const [color, setColor] = useState("#02025e")

  if (typeof window !== `undefined`) {
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

          {/* burger menu */}
          <div className=" cursor-pointer md:hidden">
            <div
              className="space-y-2 "
              onClick={() => setBurger(!burgerOpen)}
            >
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
            </div>
          </div>

          {/* show real nav when screen is medium size */}
          <nav className="hidden md:block">
            <ul className="flex gap-10 text-sm">
              <NavLink />
            </ul>
          </nav>
          <div className="mr-3 hidden cursor-pointer items-center lg:inline-flex">
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

        {burgerOpen ? <MenuItem {...{ burgerOpen, setBurger }} /> : null}
      </div>
    </>
  )
}
export default Navbar
