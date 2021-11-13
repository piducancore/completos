/** @jsx jsx */
import { jsx, Container, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Map from "./map"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <Map />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main sx={{ width: "100%", flex: "1 1 auto", variant: "layout.main" }}>
        <Container>{children}</Container>
      </main>
      <footer sx={{ width: "100%", variant: "layout.footer" }}>
        <Container>
          © {new Date().getFullYear()}, Built with{" "}
          <Themed.a href="https://www.gatsbyjs.com">Gatsby</Themed.a>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
