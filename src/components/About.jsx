import React from "react"
import styled from "@emotion/styled"

const About = ({ mdx }) => {
  return (
    <Bg>
      <Section className="section">
        <Wrapper>
          <img
            src={"/Ludo_with_logo.png"}
            alt="Ludovic Dumas profil"
          />
          <Text>
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
          </Text>
        </Wrapper>
      </Section>
    </Bg>
  )
}

export default About

const Bg = styled.div`
  background-color: var(--white);
  width: 100%;
`

const Section = styled.section`
  color: var(--txt-dark);
`

const Wrapper = styled.div`
  display: flex;
`

const Text = styled.div`
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
