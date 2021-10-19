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
        <h2 className={aboutStyles.title}>
          A software developer with a unique business perspective
        </h2>
        <div class={aboutStyles.container}>
          <div className={aboutStyles.column1}>
            <StaticImage
              src="../images/francanete.jpeg"
              alt="fran canete"
              className={aboutStyles.image}
            />
          </div>
          <div className={aboutStyles.column2}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet consectetur adipiscing elit ut aliquam purus sit. Risus
              pretium quam vulputate dignissim. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. Morbi non arcu risus quis
              varius quam quisque. Lorem donec massa sapien faucibus et
              molestie. Scelerisque mauris pellentesque pulvinar pellentesque
              habitant morbi tristique senectus et.
            </p>
          </div>
        </div>

        <h2 className={aboutStyles.title}>What I am passionate about</h2>
        <p>
          Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
          fusce ut. Et ultrices neque ornare aenean euismod elementum nisi quis.
          Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mattis
          molestie a iaculis at erat pellentesque. Nullam eget felis eget nunc
          lobortis mattis. Pellentesque elit eget gravida cum sociis natoque
          penatibus. Pellentesque habitant morbi tristique senectus et netus. Ut
          ornare lectus sit amet est placerat in egestas.
        </p>

        <h2 className={aboutStyles.title}>My interests and hobbies</h2>
        <p>
          Curabitur vitae nunc sed velit dignissim. Ultrices gravida dictum
          fusce ut. Et ultrices neque ornare aenean euismod elementum nisi quis.
          Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mattis
          molestie a iaculis at erat pellentesque. Nullam eget felis eget nunc
          lobortis mattis. Pellentesque elit eget gravida cum sociis natoque
          penatibus. Pellentesque habitant morbi tristique senectus et netus. Ut
          ornare lectus sit amet est placerat in egestas.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
