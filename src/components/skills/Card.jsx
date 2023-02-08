import React from "react"
import { css } from "@emotion/react"
import "./card.scss"

const Card = ({ skills }) => {
  const { title, list, color, logo } = skills

  const bgColor = css`
    background-color: ${color};
  `

  const bullet = css`
    :before {
      background-color: ${color};
    }
  `

  return (
    <div className="card">
      <div className="header">
        <h1>{title}</h1>
        <img
          src={logo}
          alt={title}
        />
      </div>

      <div className="content">
        <div
          css={bgColor}
          className="rectangle"
        />

        <div className="grid">
          {list.map((item, index) => {
            return (
              <p
                key={index}
                className="list"
                css={bullet}
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

export default Card
