import React from "react"
import styled from "@emotion/styled"

const Skills = () => {
  return (
    <Bg>
      <div>
        <div>Front</div>
        <div>Back</div>
        <div>Devops</div>
        <div>Tolls</div>
      </div>
      <div>github</div>
    </Bg>
  )
}

export default Skills

const Bg = styled.div`
  background-color: var(--ll-blue);
  width: 100%;
  color: var(--white);
`
