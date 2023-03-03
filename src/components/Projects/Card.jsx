import React from "react"
import { style } from "./style"
import { css } from "@emotion/react"

const Card = ({ children, title, img, darker }) => {
  let bgColor, bgImgColor, noShadow

  if (darker) {
    bgColor = "background-color: #F4F4F4"
    bgImgColor = "background-color:#FFFFFF"
    noShadow = "box-shadow: none"
  }

  return (
    <div
      css={[
        style.main,
        css`
          ${bgColor};
          ${noShadow}
        `,
      ]}
    >
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <div>
        {img ? (
          <div
            css={[
              style.rightSide,
              css`
                ${bgColor}
              `,
            ]}
          >
            <div
              css={[
                style.imgBg,
                style.imgBgLeft,
                css`
                  ${bgImgColor};
                `,
              ]}
            ></div>
            <div
              css={[
                style.imgBg,
                style.imgBgRight,
                css`
                  ${bgImgColor}
                `,
              ]}
            ></div>
            <div css={style.img}>
              <img
                src={"/projects/" + img}
                alt={title + "image"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
