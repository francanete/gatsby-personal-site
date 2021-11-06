import React from "react"
import { Link } from "gatsby"
import * as featuredPostsStyles from "../styles/FeaturedProjects.module.css"

export default function FeaturedPosts({ featuredPosts }) {
  return (
    <div className="latest-posts">
      <p className={featuredPostsStyles.header}>Recent articles</p>
      <ol style={{ listStyle: `none` }}>
        {featuredPosts.map(post => {
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
  )
}
