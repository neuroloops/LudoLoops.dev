import React from "react"
import { css } from "@emotion/react"

const Card = ({ skills }) => {
  const { title, list, color, logo } = skills

  const card = css`
    background-color: #ffffff;
    color: #202020;
    display: flex;
    border-radius: 19px;
    min-width: 558px;
    height: 193px;
    h1 {
      font-weight: var(--fontBlack);
      font-size: 18px;
    }
  `
  const rectangle = css`
    width: 405px;
    height: 10px;
    background-color: ${color};
  `
  const liStyle = css`
    font-size: 14px;
    font-weight: 700;
    margin-right: 34px;
    flex: 1 0 21%;
    :before {
      content: "";
      display: inline-block;
      margin-right: 9px;
      width: 10px;
      height: 10px;
      background-color: ${color};
    }
  `

  const grid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `
  return (
    <div css={card}>
      <div>
        <h1>{title}</h1>
        <img
          src={logo}
          alt={title}
        />
      </div>
      <div>
        <div css={rectangle}></div>
        <div css={grid}>
          {list.map((item, index) => {
            return (
              <p
                key={index}
                css={liStyle}
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
