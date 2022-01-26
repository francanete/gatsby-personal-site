import React from "react"
import { motion } from "framer-motion"
import * as style from "../styles/NavBar.module.css"

import { Link } from "gatsby"

export const NavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  return (
    <div className={style.links}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
      >
        <Link activeClassName={style.active} to="/about">
          About.
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} n={{ delay: 0.1 }}>
        <Link activeClassName={style.active} to="/projects">
          Projects
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} n={{ delay: 0.2 }}>
        <Link activeClassName={style.active} to="/blog">
          Articles
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} n={{ delay: 0.4 }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://podcast.francanete.com/"
        >
          Podcast
        </a>
      </motion.li>
    </div>
  )
}
