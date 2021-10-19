import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import * as aboutStyles from "../styles/About.module.css"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className={aboutStyles.aboutWraper}>
        <h2>About</h2>
        <div class={aboutStyles.container}>
          <div className={aboutStyles.column1}>
            <StaticImage
              src="../images/francanete.jpeg"
              alt="fran canete"
              className={aboutStyles.image}
            />
            <h1>Column 1</h1>
          </div>
          <div className={aboutStyles.column2}>
            <p>Hello, I'm Fran.</p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default About
