import React from "react"
import skillsJson from "../content/skills.json"
import { onClientEntry } from "../../gatsby-browser"

import * as style from "../styles/skills.module.scss"

const Card = ({ skills }) => {
  onClientEntry()
  const { title, list, color, logo } = skills
  return (
    <div className="flex max-w-xl rounded-lg bg-llWhite-400 text-txt-dark">
      <div className="mt-4 mb-4 flex w-36 flex-col items-center">
        <h2 className="mb-4 text-lg font-black">{title}</h2>
        <img
          className="w-[90px]"
          src={logo}
          alt={title}
        />
      </div>

      <div
        className="w-full max-w-sm rounded-r-lg bg-llWhite-500"
        style={{ "--bulletColor": color }}
      >
        <div className={`mb-4 ${style.rectangle} mt-7 h-2 w-full`} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item, index) => {
            return (
              <p
                key={index}
                className={` ${style.bullet} text-sm font-bold
                before:mr-2 before:inline-block before:h-2 before:w-2 before:content-['']
                `}
              >
                {item}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Skills = ({ id }) => {
  return (
    <>
      <div
        className="bg--blue scroll-mt-20"
        id={id}
      >
        <section className="section">
          <div className="mt-16 mb-16 grid grid-cols-1 gap-7 md:grid-cols-2">
            {skillsJson.map((skills, index) => {
              return (
                <Card
                  skills={skills}
                  key={index}
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default Skills
