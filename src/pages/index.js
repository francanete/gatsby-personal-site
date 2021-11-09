import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/Footer"
import FeaturedProjects from "../components/FeaturedProjects"
import IntroBio from "../components/IntroBio"
import FeaturedPosts from "../components/FeaturedPosts"
import { FaGithub } from "react-icons/fa"

const About = ({ data }) => {
  const posts = data.postMd.nodes
  const projects = data.projectMd.nodes
  return (
    <React.Fragment>
      <Header />
      <IntroBio />
      <FeaturedProjects featuredProjects={projects} />
      <FeaturedPosts featuredPosts={posts} />
      <Footer />
    </React.Fragment>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    postMd: allMarkdownRemark(
      filter: { frontmatter: { tag: { ne: "project" } } }
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    projectMd: allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: "project" } } }
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          description
          tag
          title
        }
      }
    }
  }
`
