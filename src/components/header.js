import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
  query={graphql`
      query GlobalHeadingQuery {
        datoCmsGlobal {
          globalHeading
        }
      }`
    }
  render={data => (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {data.datoCmsGlobal.globalHeading}
            </Link>
          </h1>
        </div>
      </header>
  )}
  />
)

export default Header
