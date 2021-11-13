/** @jsx jsx */
import { jsx, Container, Themed } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      width: "100%",
      variant: "layout.header",
    }}
  >
    <Container>
      <Themed.h1>
        <Themed.a as={Link} to="/">
          {siteTitle}
        </Themed.a>
      </Themed.h1>
    </Container>
  </header>
)

export default Header
