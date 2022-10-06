import React from "react"

const Footer = ({ mdx }) => {
  return (
    <footer className="footer">
      <div>
        <p>
          &copy;{new Date().getFullYear()} {mdx}
        </p>
      </div>
    </footer>
  )
}

export default Footer
