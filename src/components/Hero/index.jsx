import React from "react"
// import "./hero.module.scss"
import { style } from "./style"

const Hero = () => {
  return (
    <div
      css={style.bgColor}
      id="Hero"
    >
      <div css={style.imgContainer}>
        <div>
          <img
            src={"/hero/LL_hero_top.svg"}
            alt="background logo"
          />
        </div>
        <div css={style.img2}>
          <img
            src={"/hero/LL_hero_bottom.svg"}
            alt="background logo"
          />
        </div>

        <section
          className="section"
          css={style.section}
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
              css={style.button}
            >
              contact with me
            </div>
          </div>
          <div>
            <img
              src={"/hero/composition.svg"}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
