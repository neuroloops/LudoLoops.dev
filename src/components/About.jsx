import React from "react"
import { css } from "@emotion/react"

const About = () => {
  return (
    <div className="bg--white">
      <section
        className="section"
        css={section}
      >
        <div css={wrapper}>
          <img
            src={"/Ludo_with_logo.png"}
            alt="Ludovic Dumas profil"
          />
          <div css={text}>
            <h2>
              <span> Hello, my name is</span> <br /> Ludovic Dumas
            </h2>
            <p>
              I am a software developer with a strong background in JavaScript
              programming and a passion for blockchain technology. With
              experience living in both Canada and France, I possess an
              international perspective and a curiosity for emerging
              technologies such as OpenAI and ChatGPT.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

const section = css`
  color: var(--txt-dark);
`

const wrapper = css`
  display: flex;
`

const text = css`
  background-color: var(--white-dark);
  width: 750px;
  h2 {
    font-weight: 800;
    font-size: 36px;
    span {
      font-size: 18px;
    }
  }
  p {
    font-size: 14px;
  }
`
