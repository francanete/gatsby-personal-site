import React from "react"
import { NavLinks } from "./NavLinks"
import { useState } from "react"
// import { CgMenuGridR, CgClose } from "react-icons/Cg"

// import { CgMenuGridR } from "@react-icons/all-files/Cg/CgMenuGridR"
// import { CgClose } from "@react-icons/all-files/Cg/CgClose"
import { FaTh } from "@react-icons/all-files/fa/FaTh"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"

import * as style from "../styles/NavBar.module.css"
import Footer from "./Footer"

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <FaTh
      className={style.Hamburger}
      size="25px"
      color="#4d4d4d"
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <AiOutlineClose
      className={style.Hamburger}
      size="28px"
      color="#4d4d4d"
      onClick={() => setOpen(!open)}
    />
  )

  return (
    <nav className={style.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <div className={style.navContainer}>
          <div className={style.linksMobile}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
          </div>
        </div>
      )}
    </nav>
  )
}
