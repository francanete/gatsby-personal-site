import React from "react"
import { NavLinks } from "./NavLinks"
import { useState } from "react"
// import { CgMenuGridR, CgClose } from "react-icons/Cg"

// import { CgMenuGridR } from "@react-icons/all-files/Cg/CgMenuGridR"
// import { CgClose } from "@react-icons/all-files/Cg/CgClose"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer"

import * as style from "../styles/NavBar.module.css"

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <FaBeer
      className={style.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <FaBeer
      className={style.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  )

  return (
    <nav className={style.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {/* {open ? "O" : "X"} */}
      <div className={style.linksMobile}></div>
      {open && <NavLinks />}
    </nav>
  )
}
