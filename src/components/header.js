import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Bio from "./bio"
import NavBar from "./NavBar"

export default function Header() {
  return (
    <>
      <div className="header-wraper">
        <NavBar />
        <div className="header">
          <h1 className="header-title">Hi, I'm Fran!</h1>
          <div className="bio-header">
            <Bio />
          </div>
        </div>
      </div>
    </>
  )
}
