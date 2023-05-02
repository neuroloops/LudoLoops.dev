import React from "react"
import Wrapper from "../components/Wrapper"
import aboutJson from "../content/about.json"

const Card = ({ children, className }) => {
  return (
    <div className={`${className} mx-4 mb-8 rounded-2xl p-8 sm:mx-8 xl:mx-0`}>
      {children}
    </div>
  )
}

const ItemLi = ({ children, img }) => {
  return (
    <div className="bg mt-6 flex items-center">
      <img
        src={"/about/" + img}
        alt=""
        className="w-8"
      />
      <p className="ml-4 font-bold ">{children}</p>
    </div>
  )
}

const About = ({ id }) => {
  return (
    <Wrapper
      className="flex scroll-mt-20 bg-white pb-24 text-txt-dark"
      id={id}
    >
      <div className="flex flex-wrap justify-center">
        <aside className="w-5/12 max-w-[292px] pt-16">
          <img
            src={"/about/Ludo_with_logo.webp"}
            alt="Ludovic Dumas profil picture"
          />
        </aside>
        <div className="pt-20 xl:ml-20 xl:w-6/12 ">
          <Card className="leftArrow relative bg-llWhite-500">
            <header>
              <h2>
                <span className="text-lg">{aboutJson.title} </span> <br />
                {aboutJson.name}
              </h2>
            </header>
            <section className="p-8 text-sm">
              <p>{aboutJson.content}</p>
            </section>
          </Card>

          <Card className="mb-0 bg-white shadow-card">
            <h3 className="text-4xl font-extrabold">What can I offer</h3>
            <div className="block md:grid md:grid-cols-2 ">
              {aboutJson.offer.map((item, index) => {
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
      </div>
    </Wrapper>
  )
}
export default About
