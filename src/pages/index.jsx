import React from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { Navbar } from "../components/Navbar"
// import Posts from "../components/Posts"
import { graphql } from "gatsby"
import About from "../components/About"
import Demo from "../components/Demo"
import Projects from "../components/Projects"

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data

  const mdx = {}

  for (let post of nodes) {
    mdx[post.frontmatter.title] = post.body
  }
  console.log(mdx)
  return (
    <div>
      <Hero />
      <Navbar mdx={mdx.navbar} />
      <Hero mdx={mdx.hero} />
      <About mdx={mdx.about} />
      <Projects mdx={mdx.Projects} />
      <Demo mdx={mdx.Demo} />
      <Footer mdx={mdx.footer} />
    </div>
  )
  //   <Hero showPerson />
  //   <Posts title="recently published" />
  // </Layout>
}

export default IndexPage

export const query = graphql`
  {
    allMdx {
      nodes {
        body
        frontmatter {
          title
        }
      }
    }
  }
`
