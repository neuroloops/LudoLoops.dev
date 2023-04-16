import React from "react"

export default ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={className + "flex"}
    >
      <section className="flex flex-wrap justify-center text-txt-dark xl:container lg:flex-nowrap ">
        {children}
      </section>
    </div>
  )
}
