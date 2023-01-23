import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Navbar = ({ mdx }) => {
  return (
    <Wrapper className="bg-blue">
      <img
        src={"/logo_text.svg"}
        alt="Logo"
      />
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Demo</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <p>ludoloops@pm.me</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--ll-blue);
  font-size: 13px;
  font-weight: bold;
  display: flex;
  color: var(--white);
  align-items: center;
  justify-content: space-between;

  nav {
    width: 100%;
  }

  ul {
    justify-content: space-between;
    display: flex;
    /* row-gap: 40px; */
    font-size: 13px;
    font-weight: bold;
    list-style-type: none;
  }
`
