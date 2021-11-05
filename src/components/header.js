import React from "react"
import Bio from "./bio"
import NavBar from "./NavBar"
import * as HeaderStyles from "../styles/Header.module.css"

export default function Header() {
  return (
    <>
      <div className="header-wraper">
        <NavBar />
        <div className="header">
          <h1 className={HeaderStyles.title}>Hi, I'm Fran!</h1>
          <div className="bio-header">
            <Bio />
          </div>
        </div>
      </div>
    </>
  )
}
