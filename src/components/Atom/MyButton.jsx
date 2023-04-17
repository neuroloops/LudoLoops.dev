import React from "react"

export const MyButton = ({ children, className, type, disabled, btn }) => {
  if (className === undefined) className = ""
  console.log(btn)

  switch (btn) {
    case undefined:
    case "light":
      className +=
        " bg-btnBg-light text-btnTxt-light hover:bg-btnBg-lightH hover:txt-btnTxt-lightH"
      break
    case "dark":
      className +=
        " bg-btnBg-dark text-btnTxt-dark hover:bg-btnBg-darkH hover:text-btnTxt-darkH"
      break
  }

  return (
    <button
      className={
        className +
        " w-fit cursor-pointer rounded-full px-16 py-2 text-sm font-semibold hover:px-[3.8rem] hover:py-1.5  hover:text-base focus:outline-none"
      }
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default MyButton
