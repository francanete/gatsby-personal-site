import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as IntroBioStyle from "../styles/IntroBio.module.css"

export default function IntroBio() {
  return (
    <div className={IntroBioStyle.wrapper}>
      <div className={IntroBioStyle.container}>
        <div className={IntroBioStyle.image}>
          <StaticImage
            src="../images/franBio.jpeg"
            alt="fran canete"
            className={IntroBioStyle.image}
          />
        </div>
        <div className={IntroBioStyle.introText}>
          <p>
            Intro text about me Intro text about me Intro text about me Intro
            text about me Intro text about me Intro text about meIntro text
          </p>
          <p>
            Intro text about me Intro text about me Intro text about me Intro
          </p>
          <button className={IntroBioStyle.btn}>Know More</button>
        </div>
      </div>
    </div>
  )
}
