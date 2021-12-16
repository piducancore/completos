/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

import Map from "./map"

const Layout = ({ children }) => {
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
      {/* <main sx={{ width: "100%", height: "32vh", overflowY: "auto", flex: "1 1 auto", variant: "layout.main" }}>{children}</main> */}
    </div>
  )
}

export default Layout
