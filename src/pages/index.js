import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/Footer"
import FeaturedProjects from "../components/FeaturedProjects"

const About = ({ data }) => {
  const posts = data.postMd.nodes
  const projects = data.projectMd.nodes
  return (
    <React.Fragment>
      <Header />
      <FeaturedProjects featuredProjects={projects} />

      <div className="latest-posts">
        <p className="recent">— Recent articles</p>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>

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
