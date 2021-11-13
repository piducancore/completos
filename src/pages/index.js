/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Themed.h1>Hi people</Themed.h1>
    <Themed.p>Welcome to your new Gatsby site.</Themed.p>
    <Themed.p>Now go build something great.</Themed.p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Themed.p>
      <Themed.a as={Link} to="/page-2/">
        Go to page 2
      </Themed.a>{" "}
      <br />
    </Themed.p>
  </Layout>
)

export default IndexPage
