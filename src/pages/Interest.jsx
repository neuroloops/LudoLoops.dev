import React from "react"
import Wrapper from "../components/Wrapper"
const Interest = ({ id }) => {
  return (
    <Wrapper
      id={id}
      className="h-96 scroll-mt-20 bg-llBlack-500 "
    >
      <div className="text-white">
        <h2>Interests</h2>
        <ul>
          <li>Mechanical keyboard</li>
          <li>Traveling</li>
          <li>Cuisine</li>
          <li>Moto</li>
          <li></li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Interest
