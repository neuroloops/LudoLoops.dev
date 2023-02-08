import React from "react"
import { css } from "@emotion/react"
import Card from "./skills/Card"

const Skills = () => {
  const frontend = {
    title: "Frontend",
    list: ["CSS", "LESS", "SASS", "Angular", "Figma"],
    color: "#4D25DD",
    logo: "/skills/frontend.svg",
  }
  const backend = {
    title: "Backend",
    list: ["Node.js", "Auth0", "REST API", "MongoDB", "MySQL"],
    color: "#01829E",
    logo: "/skills/backend.svg",
  }
  const devops = {
    title: "Devops",
    list: ["Proxmox", "Docker", "Heroku", "Aws", "Ubuntu", "Arch"],
    color: "#06C0E9",
    logo: "/skills/devops.svg",
  }
  const tools = {
    title: "Tools",
    list: ["Postman", "WebPack", "vscode", "Git"],
    color: "#5D5380",
    logo: "/skills/tools.svg",
  }
  return (
    <div className="bg--blue">
      <section className="section">
        <div css={layout}>
          <Card skills={frontend} />
          <Card skills={backend} />
          <Card skills={devops} />
          <Card skills={tools} />
        </div>
      </section>
    </div>
  )
}

export default Skills

const layout = css`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 26px 30px;
  height: 1027px;
  align-content: center;
  justify-content: center;
`
