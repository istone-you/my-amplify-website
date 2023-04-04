import * as React from "react"
import { Link } from "gatsby"

import Home from '../images/home.png'
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
            <img src={Home} alt="home.png" height="50px" />
          </Link>
      }
    </header>
  </div>
)

export default Header
