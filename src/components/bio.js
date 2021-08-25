/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

  const bioText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
        <strong>Hi! I'm {author.alias},</strong> 
          <br></br>
          { bioText }
          {` `}<br></br>
          <hr></hr>
          <a className="socialLink" target="_blank" rel="noreferrer" href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter
          </a>
          <a className="socialLink" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/francanete/`}>
            LinkedIn
          </a>
          <a className="socialLink" target="_blank" rel="noreferrer" href={`https://github.com/francanete`}>
            Github
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
