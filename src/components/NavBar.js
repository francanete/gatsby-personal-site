import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <div className="nav-wraper">
      <nav>
        <div className="logo">
          <Link to="/">
            <span>FRAN CANETE</span>
          </Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Articles</Link>
        </div>
      </nav>
    </div>
  )
}
