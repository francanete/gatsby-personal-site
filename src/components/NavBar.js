import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
