import React from "react"
import { Link, graphql } from "gatsby"
import * as feturedProjectsStyles from "../styles/FeaturedProjects.module.css"

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className="latest-posts projects">
      <p className={feturedProjectsStyles.header}>Featured Projects</p>
      <div className={feturedProjectsStyles.projectsWrapper}>
        {featuredProjects.map(project => {
          const title = project.frontmatter.title || project.fields.slug

          return (
            <div
              key={project.fields.slug}
              className={feturedProjectsStyles.project}
            >
              <article
                // className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={project.fields.slug}
                      itemProp="url"
                      className={feturedProjectsStyles.projectTitle}
                    >
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProjects
