import React from "react"
import ContactForm from "../components/contactForm"

const Contact = ({ id }) => {
  return (
    <div
      className="bg--blue flex scroll-mt-20 "
      id={id}
    >
      <img
        src="/demo/leftBg.png"
        alt="background image"
      />

      <section className="mx-16 w-3/4">
        <ContactForm />
      </section>

      <img
        src="/demo/rightBg.png"
        alt="background image"
      />
    </div>
  )
}

export default Contact
