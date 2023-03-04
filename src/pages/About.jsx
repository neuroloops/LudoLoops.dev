import React from "react"
import Wrapper from "../components/Wrapper"

const Card = ({ children, className }) => {
  return (
    <div className={`${className} mx-4 sm:mx-8 xl:mx-0 p-8 rounded-2xl mb-8`}>
      {children}
    </div>
  )
}

const ItemLi = ({ children, img }) => {
  return (
    <div className="flex items-center mt-6">
      <img
        src={"/about/" + img}
        alt=""
        className="w-8"
      />
      <p className="ml-4 font-bold ">{children}</p>
    </div>
  )
}

const offering = [
  {
    img: "web.svg",
    text: "Building a landing page website",
  },
  {
    img: "cart.svg",
    text: "E-commerce with design with different pages",
  },
  {
    img: "social.svg",
    text: "Social media website",
  },
  {
    img: "linux.svg",
    text: "Manage and maintenance of Linux server",
  },
  {
    img: "server.svg",
    text: "Deployment, DNS management",
  },
]

const About = () => {
  return (
    <Wrapper
      className="pb-24 bg-white text-txt-dark"
      id="About"
    >
      <aside className="w-5/12 max-w-[292px] pt-16">
        <img
          src={"/about/Ludo_with_logo.png"}
          alt="Ludovic Dumas profil picture"
        />
      </aside>
      <div className="pt-20 xl:ml-20 xl:w-6/12 ">
        <Card className="relative leftArrow bg-llWhite">
          <h2>
            <span className="text-lg">Hello, my name is</span> <br />
            Ludovic Dumas
          </h2>
          <p className="p-8 text-sm">
            I am a software developer with a strong background in JavaScript
            programming and a passion for blockchain technology. With experience
            living in both Canada and France, I possess an international
            perspective and a curiosity for emerging technologies such as OpenAI
            and ChatGPT.
          </p>
        </Card>

        <Card className="mb-0 bg-white shadow-card">
          <h2>What can I offer</h2>
          <div className="grid grid-cols-2">
            {offering.map((item, index) => {
              const { img, text } = item
              return (
                <ItemLi
                  img={img}
                  key={index}
                >
                  {text}
                </ItemLi>
              )
            })}
          </div>
        </Card>
      </div>
    </Wrapper>
  )
}
export default About
