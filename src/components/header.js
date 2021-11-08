import React from "react"
import Bio from "./bio"
import NavBar from "./NavBar"
import * as HeaderStyles from "../styles/Header.module.css"

export default function Header() {
  return (
    <>
      <div className={HeaderStyles.wrapper}>
        <NavBar />
        <div className={HeaderStyles.content}>
          <div className={HeaderStyles.contentItem}>
            <h1 className={HeaderStyles.title}>Hi, I'm Fran!</h1>
            <div className="bio-header">
              <Bio />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
