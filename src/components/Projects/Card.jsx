import React from "react"

const Card = ({ children, title, img, darker }) => {
  let box, imgBg

  const boxShadow = "0px 6px 42px rgba(0, 0, 0, 0.08)"

  if (darker) {
    box = "bg-llWhite-500 shadow-none  "
    imgBg = "bg-white"
  } else {
    box = "shadow-[0_6px_42px_rgba(0,0,0,0.08)] bg-white"
    imgBg = "bg-llWhite-600"
  }

  return (
    <div
      className={`${box}  mb-11 flex w-full flex-wrap justify-center rounded-2xl p-14 xl:justify-between`}
    >
      <div className="[&>p]:text-sm [&>p]:font-medium">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        {children}
      </div>
      <div>
        {img ? (
          <div className=" flex h-[400px] w-[670px]   items-center justify-between p-0 xl:relative ">
            <div
              className={`bottom-0 hidden h-[10px] w-[85px] xl:absolute xl:block ${imgBg} `}
            ></div>
            <div
              className={`right-0  hidden h-full w-[400px] rounded-r-lg
              shadow-[0_6px_42px_rgba(0,0,0,0.08)]  xl:absolute xl:block
              ${imgBg} `}
            ></div>
            <div className="w-full xl:absolute ">
              <img
                src={"/projects/" + img}
                alt={title + "image"}
                className="w-4/5 max-w-fit xl:w-fit "
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
