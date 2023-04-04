import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import '../components/styles/fade.css'

const links = [
  {
    text: "Career",
    url: "/career",
    description:
      "Here is my career history and skills",
  },
  {
    text: "GitHub",
    url: "/github",
    description:
      "Please take a look at this page that describes all GitHub repositories.",
  },
  {
    text: "Qiita",
    url: "/qiita",
    description:
      'All articles received "Likes" from many users!',
  },
  {
    text: "About",
    url: "/about",
    description:
      'Get to know about me',
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="Icon">
        <StaticImage
          src="../images/icon.jpg"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{
            marginBottom: `var(--space-3)`,
            borderRadius: `50%`,
            zIndex: 1,
            border: `1px solid black`,
          }}
        />
        <h1>
          Welcome to Yu Ishii's Site!
        </h1>
      </div>
      <div className="Comment">
        <p className={styles.intro}>
          <b>Thanks for visiting my website. Please feel free to take a look around and get to know about me.</b>
        </p>
      </div>
    </div>
    <div className="Main">
      <ul className={styles.list}>
        {links.map(link => (
          <Link
            className={styles.listItem}
            to={link.url}
          >
            <li key={link.url}>
              <b style={{ color: "black" }}>{link.text}</b>
              <p className={styles.listItemDescription}>{link.description}</p>
            </li>
          </Link>
        ))}
      </ul>
      <div className={styles.textCenter}>
        <p>My email adress is <a href="mailto:istoneyou1205@gmail.com">istoneyou1205@gmail.com</a> or find me on <a href="https://www.twitter.com/istone_you">Twitter</a></p>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
