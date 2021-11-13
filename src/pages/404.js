/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Themed.h1>404: Not Found</Themed.h1>
    <Themed.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Themed.p>
  </Layout>
)

export default NotFoundPage
