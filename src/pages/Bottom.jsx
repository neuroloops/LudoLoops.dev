import React from "react"

import style from "../components/ContactMe/style"

const Bottom = ({ id }) => {
  return (
    <div
      css={style.bg}
      id={id}
      className="scroll-mt-20"
    >
      <section
        css={style.section}
        className="h-96 bg-llBlack-500 text-white"
      >
        <div>
          <img
            src={"/navbar/logo_text.svg"}
            alt="ludoloops logomark"
          />
        </div>
        <div>
          <h2>Interests</h2>
          <p>
            Mechanical keyboard
            <br />
          </p>
        </div>
      </section>
    </div>
  )
}

export default Bottom
