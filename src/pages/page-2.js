/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Themed.h1>Hi from the second page</Themed.h1>
    <Themed.p>Welcome to page 2</Themed.p>
    <Themed.a as={Link} to="/">
      Go back to the homepage
    </Themed.a>
  </Layout>
)

export default SecondPage
