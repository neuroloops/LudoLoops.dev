import React from "react"
import { css } from "@emotion/react"

const Hero = () => {
  return (
    <div className="bg--blue">
      <section
        className="section"
        css={section}
      >
        <div>
          <h1>
            LudoLoops <br />
            <span>Full stack developer</span>
          </h1>

          <ul>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Devops</li>
            <li>tools</li>
          </ul>
          <div
            className="btn"
            css={button}
          >
            contact with me
          </div>
        </div>
        <div>
          <img
            src={"/composition.svg"}
            alt=""
          />
        </div>
      </section>
    </div>
  )
}

export default Hero

const section = css`
  color: var(--white);
  h1 {
    font-size: 48px;
    font-weight: var(--bold);
  }
  ul {
    font-size: 14px;
    font-weight: var(--semiBold);
    display: flex;

    li {
      ::after {
        padding: 0 1em;
        content: "•";
        color: var(--teal);
      }
      :last-child::after {
        content: "";
      }
    }
  }
`

const button = css`
  background-color: var(--white);
  color: var(--txt-btn-dark);
`
