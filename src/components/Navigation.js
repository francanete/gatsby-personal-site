import React from "react"
import { NavLinks } from "./NavLinks"

import * as style from "../styles/NavBar.module.css"

export const Navigation = () => {
  return (
    <nav className={style.Navigation}>
      <NavLinks />
    </nav>
  )
}
