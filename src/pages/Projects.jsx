import React from "react"

import Wrapper from "../components/Wrapper"
import Card from "../components/ProjectCard.jsx"

const Project = ({ id }) => {
  return (
    <Wrapper
      id={id}
      className="bg--white scroll-mt-20"
    >
      <h1 className="mb-7 mt-20 text-3xl font-black">Projects</h1>
      <div>
        <Card
          title="Incom Delta"
          img="incomdelta.webp"
        >
          <p>Making an online store selling Star Wars helmet</p>
          <p>
            It is mandatory to make it fast and reliable. I decide to use{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              className="underline"
            >
              Netlify
            </a>{" "}
            for its CDN and its free tier is really welcome for a new business
            owner
          </p>
        </Card>
        <Card
          title="Groupomania"
          img="groupomania.webp"
          darker={true}
        >
          <p>
            The goal of these project was to build a social media webiste. It
            was mandatory to use node.js, SQL and using a frontend framework, I
            choose Angular for it.
          </p>
          <ul
            className="
          [&>li]:before:mr-2 [&>li]:before:inline-block [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:bg-[#01829E] [&>li]:before:content-['']"
          >
            <li>User can create an account</li>
            <li>user can delete it</li>
            <li>user can post message and pictures</li>
            <li>user can edit their message</li>
          </ul>
          <ul
            className="
          [&>li]:before:mr-2 [&>li]:before:inline-block [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:bg-[#01829E] [&>li]:before:content-['']"
          >
            <li>admin can delete or edit message</li>
            <li>admin can add another admin</li>
            <li>admin can reset user password</li>
          </ul>
        </Card>
        <Card title="link2.md">
          <p>
            Link2.md is a Chrome extension that allows you to copy page URL with
            a description note in markdown format. It is an easy way to create
            links with text description for any website.
          </p>
        </Card>
        <Card
          title="Media center"
          img="mediacenter.webp"
          darker={true}
        >
          <p>
            On this project, I was ask to deploy a streaming system, the
            customer had to work far away from home and wanted to watch his
            movie, download file with torrent and synchronize his file on phone
            and computer. I use docker because it is very light, fast to deploy
            with easy maintenance.
          </p>
          <p>
            Portainer make it easier for him to manage his server, he is happy
            to manage it with a GUI instead of CLI.
          </p>
        </Card>

        <Card
          title="Afgnews"
          img="afgnews.webp"
        >
          <p>news website, made with nextjs</p>
        </Card>
      </div>
    </Wrapper>
  )
}

export default Project
