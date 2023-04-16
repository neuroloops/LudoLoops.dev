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
      className={`${box}  w-full flex mb-11 p-14 rounded-2xl justify-between`}
    >
      <div className="[&>p]:text-sm [&>p]:font-medium">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        {children}
      </div>
      <div>
        {img ? (
          <div className="flex p-0  h-[400px] w-[670px] items-center justify-between relative ">
            <div
              className={`absolute bottom-0  w-[85px] h-[10px] ${imgBg} `}
            ></div>
            <div
              className={`absolute  right-0 w-[400px] h-full rounded-r-lg
              shadow-[0_6px_42px_rgba(0,0,0,0.08)]
              ${imgBg} `}
            ></div>
            <div className="absolute">
              <img
                src={"/projects/" + img}
                alt={title + "image"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
