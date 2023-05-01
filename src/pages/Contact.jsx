import React from "react"
import ContactForm from "../components/contactForm"
import Wrapper from "../components/Wrapper"
const Contact = ({ id }) => {
  return (
    <Wrapper
      id={id}
      className="bg--blue flex scroll-mt-20 items-center py-16 [&>section]:items-center"
    >
      <div className="hidden pr-4 lg:block">
        <img
          src="/demo/leftBg.webp"
          alt="background image"
        />
      </div>

      <ContactForm />

      <div className="hidden pl-4 lg:block">
        <img
          src="/demo/rightBg.webp"
          alt="background image"
        />
      </div>
    </Wrapper>
  )
}

export default Contact
