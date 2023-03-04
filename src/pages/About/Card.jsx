import React from "react"
import { style } from "./style"

const Card = ({ item }) => {
  const { img, text } = item
  return (
    <div css={style.card}>
      <img
        src={"/about/" + img}
        alt=""
      />
      <p>{text}</p>
    </div>
  )
}

export default Card
