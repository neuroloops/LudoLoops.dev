import React from "react"
import ContactForm from "../components/contactForm"

const Contact = ({ id }) => {
  return (
    <div
      className="bg--blue flex scroll-mt-20 items-center py-16"
      id={id}
    >
      <div className="hidden pr-4 lg:block">
        <img
          src="/demo/leftBg.png"
          alt="background image"
        />
      </div>
      <section className="w-4/5">
        <ContactForm />
      </section>
      <div className="hidden pl-4 lg:block">
        <img
          src="/demo/rightBg.png"
          alt="background image"
        />
      </div>
    </div>
  )
}

export default Contact
