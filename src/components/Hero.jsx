import React from "react"
import styled from "@emotion/styled"

const Hero = ({ mdx }) => {
  return (
    <Bg>
      <Section className="section">
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
          <Button className="btn">contact with me</Button>
        </div>
        <div>
          <img
            src={"/composition.svg"}
            alt=""
          />
        </div>
      </Section>
    </Bg>
  )
}

export default Hero

const Bg = styled.div`
  background-color: var(--ll-blue);
  width: 100%;
`

const Section = styled.section`
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

const Button = styled.div`
  background-color: var(--white);
  color: var(--txt-btn-dark);
`
