import React from "react"
import { Link } from "gatsby"
import * as featuredProjectsStyles from "../styles/FeaturedProjects.module.css"

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className="latest-posts projects">
      <p className={featuredProjectsStyles.header}>Featured Projects</p>
      <div className={featuredProjectsStyles.projectsWrapper}>
        {featuredProjects.map(project => {
          const title = project.frontmatter.title || project.fields.slug

          return (
            <div
              key={project.fields.slug}
              className={featuredProjectsStyles.project}
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
                      className={featuredProjectsStyles.projectTitle}
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
