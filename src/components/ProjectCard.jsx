import React from "react"

import * as style from "../styles/projectCard.module.scss"

const ImgBlock = ({ darker, title, img }) => {
  return (
    <div className=" my-10  xl:w-2/3 xl:p-0 ">
      <div
        className={`${style.hover} ${
          darker ? style.hoverDarker : style.hoverLight
        } mx-16`}
      >
        <div
          className={`${darker ? style.darker : ""} ${
            style.border
          } relative xl:ml-0`}
        >
          <img
            src={"/projects/" + img}
            alt={title + "image"}
            className={` w-full`}
          />
        </div>
      </div>
    </div>
  )
}

const Card = ({ children, title, img, darker }) => {
  let box

  if (darker) {
    box = "bg-llWhite-500 shadow-none  "
  } else {
    box = "shadow-[0_6px_42px_rgba(0,0,0,0.08)] bg-white"
  }

  return (
    <div
      className={`${box} mb-11  flex w-full flex-wrap justify-center rounded-2xl py-14  xl:justify-center`}
    >
      <div className="mt-16 px-16 xl:w-1/3 [&>p]:text-sm [&>p]:font-medium">
        <h2 className="mb-4 text-2xl font-extrabold ">{title}</h2>

        <>{children}</>
      </div>

      <>{img ? <ImgBlock {...{ darker, img, title }} /> : <></>}</>
    </div>
  )
}

export default Card
