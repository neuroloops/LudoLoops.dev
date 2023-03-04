import React from "react"

export default ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`${className} flex `}
    >
      <section className="flex flex-wrap justify-center lg:flex-nowrap xl:container text-txt-dark ">
        {children}
      </section>
    </div>
  )
}
