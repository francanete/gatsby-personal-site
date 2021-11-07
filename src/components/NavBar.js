import { Link } from "gatsby"
import React from "react"
import * as NavBarStyles from "../styles/NavBar.module.css"

export default function NavBar() {
  return (
    // <div className={NavBarStyles.wrapper}>
    <nav className={NavBarStyles.nav}>
      <div className={NavBarStyles.logo}>
        <Link to="/">
          <span>FRAN CANETE</span>
        </Link>
      </div>
      <div className={NavBarStyles.links}>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Articles</Link>
      </div>
    </nav>
    // </div>
  )
}
