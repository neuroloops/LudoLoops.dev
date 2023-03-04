import React from "react"

const Wrapper = ({ children, bgColor }) => {
  return <div className={`bg-${bgColor} `}>{children}</div>
}

export default Wrapper
