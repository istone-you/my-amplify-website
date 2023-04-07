import * as React from "react"
import { Link } from "gatsby"

import Home from '../images/home.png'
import * as styles from "../components/index.module.css"
import '../components/styles/fade.css'

const Header = ({ path }) => (
  <div className={`Header`}>
    <header
      style={{
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {
        path === "/" ?
          <></>
          :
          <Link to="/">
            <img src={Home} alt="home.png" className={styles.homeButton} />
          </Link>
      }
    </header>
  </div>
)

export default Header
