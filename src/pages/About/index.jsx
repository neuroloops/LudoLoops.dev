import React from "react"
import { style } from "./style"
import Card from "./Card"
import offering from "./offer.json"
import Wrapper from "../../components/Wrapper"
const About = () => {
  return (
    <Wrapper
      bgColor="white"
      id="About"
    >
      <section className="container flex bg-red-600">
        <div css={style.imgCtn}>
          <img
            src={"/about/Ludo_with_logo.png"}
            alt="Ludovic Dumas profil"
          />
        </div>
        <div css={style.rightCtn}>
          <div
            css={style.aboutMe}
            className="aboutMe"
          >
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
          <div css={style.offer}>
            <h2>what can I offer</h2>
            <div css={style.cards}>
              {offering.map((item, index) => {
                return (
                  <Card
                    item={item}
                    key={index}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {/* </section> */}
      </section>
    </Wrapper>
  )
}

export default About
