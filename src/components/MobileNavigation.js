import React from "react"
import { NavLinks } from "./NavLinks"
import { CgMenuGridR } from "react-icons/Cg"
import { CgClose } from "react-icons/Cg"
import { useState } from "react"

import * as style from "../styles/NavBar.module.css"

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <CgMenuGridR
      className={style.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <CgClose
      className={style.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  )

  return (
    <nav className={style.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      <div className={style.linksMobile}></div>
      {open && <NavLinks />}
    </nav>
  )
}
