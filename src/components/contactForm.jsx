import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import MyButton from "./Atom/MyButton"
import * as style from "../styles/contactForm.module.scss"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyyabler")
  if (state.succeeded) {
    return <p>Thanks for your message!</p>
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" mt-8 flex w-full items-center text-llBlack-500"
    >
      <input
        type="text"
        name="_gotcha"
        className="hidden"
      />
      <div className="mr-8">
        <h2 className="mb-8 text-center text-white">Contact me</h2>
        <div className={style.leftBox + " flex flex-col rounded-xl p-8"}>
          <label
            htmlFor="email"
            className="mb-4 text-white"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="johnDoe@mail.com"
            className="text-llBlack-500"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>
      <div className={style.rightBox + " flex  w-4/5 flex-col rounded-xl p-8"}>
        <label
          htmlFor="message"
          className="mb-4 text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, voluptates."
          className="mx-auto h-36 w-full "
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <MyButton
          type="submit"
          disabled={state.submitting}
          className="mx-auto mt-6"
        >
          Submit
        </MyButton>
      </div>
    </form>
  )
}
export default ContactForm
