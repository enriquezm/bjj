import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./layout.css"

const LineBreak = styled.hr`
  margin: 50px 0;
  border: 1px solid #efefef;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <h2
        style={{
          fontFamily: `Heebo, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: 960,
        }}
      >
        <header>
          {header}
          {/* <div>
            <Link to="#">Contact</Link>
          </div> */}
        </header>
        <LineBreak />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} That Guy That Rolls, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
