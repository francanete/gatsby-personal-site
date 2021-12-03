import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/IntroBio.module.css"

export default function IntroBio() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.itemImage}`}>
          <StaticImage
            src="../images/franBio.jpeg"
            alt="fran canete"
            className={styles.image}
          />
        </div>

        <div
          className={`${styles.introText} ${styles.item} ${styles.itemText}`}
        >
          <p>
            Intro text about me Intro text about me Intro text about me Intro
            text about me Intro text about me Intro text about meIntro text
          </p>
          <p>
            Intro text about me Intro text about me Intro text about me Intro
          </p>
          <button className={styles.btn}>Know More</button>
        </div>
      </div>
    </div>
  )
}
