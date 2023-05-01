import React from "react"

export default ({ children, className, id }) => {
  if (className == undefined) className = ""

  return (
    <div id={id}>
      <section
        className={
          className + " justify-center px-20 text-txt-dark xl:w-[1280px]"
        }
      >
        {children}
      </section>
    </div>
  )
}
