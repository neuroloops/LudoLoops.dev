import React from "react"
import * as style from "../styles/hero.module.scss"
import MyButton from "../components/Atom/MyButton"

const list = ["Frontend", "Backend", "Devops"]
const Hero = () => {
  return (
    <div
      className={style.bg + " scroll-mt-20"}
      id="Hero"
    >
      <div className="relative top-[20%] left-3">
        <div>
          <img
            src={"/hero/LL_hero_top.svg"}
            alt="background logo"
          />
        </div>
        <div className="mt-8 ml-16 ">
          <img
            src={"/hero/LL_hero_bottom.svg"}
            alt="background logo"
            className="w-96"
          />
        </div>

        <section className="absolute top-0 mx-auto flex w-full flex-wrap-reverse items-center justify-center px-5 text-white ">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl font-bold">
              LudoLoops <br />
              <span>Full stack developer</span>
            </h1>
            <ul className="mb-5 mt-7 flex text-sm font-semibold">
              {list.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="after:px-1 after:text-[#01FEF0] after:content-['•'] after:last:content-['']"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
            <MyButton btn="dark">Contact me</MyButton>
            {/* <div className="flex w-full"></div> */}
          </div>
          <div>
            <img
              src="/hero/composition.svg"
              alt="ludoloops laptop"
              className="mb-8 w-11/12 max-w-md "
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
