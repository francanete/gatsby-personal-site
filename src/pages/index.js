import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/Footer"

const About = ({ data }) => {
  const posts = data.postMd.nodes
  const projects = data.projectMd.nodes
  return (
    <React.Fragment>
      <Seo title="Fran Canete" />
      <Header />
      <div className="latest-posts">
        <p className="recent">— Recent posts</p>
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
      <div className="latest-posts">
        <p className="recent">— Projects</p>
        <ol style={{ listStyle: `none` }}>
          {projects.map(project => {
            const title = project.frontmatter.title || project.fields.slug

            return (
              <li key={project.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={project.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{project.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          project.frontmatter.description || project.excerpt,
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
      limit: 3
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
