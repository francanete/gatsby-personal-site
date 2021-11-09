import { Link } from "gatsby"
import React from "react"
import * as NavBarStyles from "../styles/NavBar.module.css"

export default function NavBar() {
  return (
    // <div className={NavBarStyles.wrapper}>
    <nav className={NavBarStyles.nav}>
      <div>
        <Link className={NavBarStyles.logo} to="/">
          FRAN CANETE
        </Link>
      </div>
      <div className={NavBarStyles.links}>
        <Link activeClassName={NavBarStyles.active} to="/about">
          About
        </Link>
        <Link activeClassName={NavBarStyles.active} to="/projects">
          Projects
        </Link>
        <Link activeClassName={NavBarStyles.active} to="/blog">
          Articles
        </Link>
      </div>
    </nav>
    // </div>
  )
}
