import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          className="socialLink"
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/francanetecom`}
        >
          <FaTwitterSquare fill="#1C3466" size="1.2rem" />
        </a>
        <a
          className="socialLink"
          target="_blank"
          rel="noreferrer"
          href={`https://www.linkedin.com/in/francanete/`}
        >
          <FaLinkedin fill="#1C3466" size="1.2rem" />
        </a>
        <a
          className="socialLink"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/francanete`}
        >
          <FaGithub fill="#1C3466" size="1.2rem" />
        </a>
      </div>

      <footer>
        © {new Date().getFullYear()}, Fran Canete
        {` `}
      </footer>
    </div>
  )
}
