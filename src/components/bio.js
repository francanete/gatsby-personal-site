import * as React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            alias
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const bioText = (
    <>
      <p>
        <strong>Frontend Developer</strong> based in Manchester, UK.
      </p>
      <p>
        I'm passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </p>
      {/* <br /> */}
      <p>
        Currently working with React, Next.js, Gatsby, Typescript, GraphQL,
        Node.js
      </p>
    </>
  )
  return (
    <div className="bio">
      {author?.name && (
        <div>
          {bioText}
          <div className="bio-icons">
            <a
              className="socialLink"
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${social?.twitter || ``}`}
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
        </div>
      )}
    </div>
  )
}

export default Bio
