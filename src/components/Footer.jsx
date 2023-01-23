import React from "react"
import styled from "@emotion/styled"

const Footer = ({ mdx }) => {
  return (
    <FooterDiv className="footer">
      <div>
        <Section>
          <div>
            <img
              src={"/logo_text.svg"}
              alt="ludoloops logomark"
            />
          </div>
          <div>
            <p>Do you want to work with me? Contact me.</p>
          </div>
          <Button className="btn">contact with me</Button>
        </Section>
        <div className="footerNav">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
          &copy;{new Date().getFullYear()} {mdx}
        </div>
      </div>
    </FooterDiv>
  )
}

export default Footer

const FooterDiv = styled.footer`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-color: var(--bg-footer);
  color: var(--white);
  height: 450px;
  ul {
    display: flex;
    gap: 41px;
  }
  .footerNav {
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.div`
  background-color: var(--teal);
  color: var(--txt-btn-dark);
`
