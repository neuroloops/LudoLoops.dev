import React from "react"
import style from "../components/Hero/style"

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

            <button
              className="px-4 py-2 font-bold text-white bg-teal-500 rounded focus:shadow-outline hover:bg-teal-700 focus:outline-none "
              type="button"
            >
              contact with me
            </button>
          </div>
          <div>
            <img
              src={"/hero/composition.svg"}
              alt=""
              css={style.composition}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
