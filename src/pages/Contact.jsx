import React from "react"
import ContactForm from "../components/contactForm"
import Wrapper from "../components/Wrapper"
const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="bg--blue relative scroll-mt-20  py-16   "
    >
      <div className="absolute hidden  max-h-full w-screen flex-row items-center justify-between pb-20 xl:flex">
        <img
          src="/demo/leftBg.webp"
          alt="background image"
          className=" h-full"
        />
        <div className="xl:w-[1280px]"></div>
        <img
          src="/demo/rightBg.webp"
          alt="background image"
          className=" h-full"
        />
      </div>

      <div className="mx-auto mt-8 flex w-full items-center justify-center border  border-yellow-400 px-4 text-txt-dark xl:w-[1280px] xl:px-20">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
