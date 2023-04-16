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

        <section className="absolute top-0 flex max-w-7xl items-center pl-5 text-white md:left-[20%]">
          <div>
            <h1 className="text-5xl font-bold">
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
            <div className="flex w-full">
              <MyButton btn="dark">Contact me</MyButton>
            </div>
          </div>
          <div>
            <img
              src={"/hero/composition.svg"}
              alt=""
              className="w-11/12"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
