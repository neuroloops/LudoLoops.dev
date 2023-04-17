import React from "react"

import Card from "../components/Projects/Card.jsx"

const Project = ({ id }) => {
  return (
    <div
      className="bg--white scroll-mt-20"
      id={id}
    >
      <section className="section">
        <h1 className="text-3xl font-black">Projects</h1>

        <Card
          title="Incom Delta"
          img="incomdelta.png"
        >
          <p>Making an online store selling Star Wars helmet</p>
          <p>
            It is mandatory to make it fast and reliable. I decide to use
            Netlify for its CDN and its free tier is really welcome for a new
            business owner
          </p>
        </Card>
        <Card
          title="Groupomania"
          img="groupomania.png"
          darker={true}
        >
          <ul>
            <li>User can create an account</li>
            <li>user can delete it</li>
            <li>user can post message and pictures</li>
            <li>user can edit their message</li>
          </ul>
          <ul>
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
          img="mediacenter.png"
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
        <Card>
          <h2>Recettes de Moumy</h2>
        </Card>
        <Card darker={true}>
          <h2>Afgnews</h2>
          <p>news website, made with nextjs</p>
        </Card>
      </section>
    </div>
  )
}

export default Project
