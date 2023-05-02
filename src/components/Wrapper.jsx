import React from "react"

export default ({ children, className, id }) => {
  if (className == undefined) className = ""

  return (
    <div
      id={id}
      className={className + " flex scroll-mt-20 justify-center"}
    >
      <div className={" px-4 text-txt-dark xl:w-[1280px] xl:px-20"}>
        {children}
      </div>
    </div>
  )
}
