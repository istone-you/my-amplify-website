/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useLocation } from "@reach/router"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div style={{
      boxShadow: "15px 15px 0px 0 black",
      width: "90%", margin: "20px auto",
      border:"2px solid black",
      paddingBottom: "50px"
    }}>
      <Header path={location.pathname} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
      </div>
    </div>
  )
}

export default Layout
