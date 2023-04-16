import React from "react"
import NavLink from "./Atom/NavLink"
import goToLink from "./Atom/goToLink"

const Navbar = ({ color, email }) => {
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
