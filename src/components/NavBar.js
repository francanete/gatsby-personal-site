import { Link } from "gatsby"
import React from "react"
import * as style from "../styles/NavBar.module.css"
import { MobileNavigation } from "./MobileNavigation"
import { Navigation } from "./Navigation"

export default function NavBar() {
  return (
    // <div className={NavBarStyles.wrapper}>
    <div className={style.navContainer}>
      <div>
        <Link className={style.logo} to="/">
          FRAN CANETE
        </Link>
      </div>
      <div className={style.NavBar}>
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
    // </div>
  )
}
