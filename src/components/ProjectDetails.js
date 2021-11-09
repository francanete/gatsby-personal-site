import React from "react"
import * as style from "../styles/ProjectDetails.module.css"

export default function ProjectDetails({ postData }) {
  const tech = postData.frontmatter.tech
  const github = postData.frontmatter.github
  const live = postData.frontmatter.live

  return (
    <div className={style.wrapper}>
      <p className={style.technologies}>Technologies:</p>
      <div className={style.techWrapper}>
        {tech.map((tech, index) => (
          <span className={style.tech} key={index}>
            {tech}
          </span>
        ))}
      </div>
      <div className={style.btnWrapper}>
        <button
          className={style.button}
          onClick={() => window.open(github, "_blank")}
        >
          GitHub
        </button>
        <button
          className={style.button}
          onClick={() => window.open(live, "_blank")}
        >
          See Live
        </button>
      </div>
    </div>
  )
}
