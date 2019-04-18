import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Instagram } from "react-feather"

import "./layout.css"

const NavLinks = styled.div`
  a {
    svg {
      stroke: #7C26CB;
      &:hover {
        stroke: #cb26c8;
      }
    }
  }
`

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
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: 960,
          }}
        >
          <header>
            {header}
            <NavLinks>
              <a href="https://instagram.com/rubberontherocks"><Instagram /></a>
            </NavLinks>
          </header>
          <LineBreak />
          <main>{children}</main>
        </div>
        <footer>
          <div>
            <a href="https://instagram.com/rubberontherocks"><Instagram /></a>
          </div>
          <div>
            © {new Date().getFullYear()} That Guy That Rolls, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          </footer>
      </div>
    )
  }
}

export default Layout
