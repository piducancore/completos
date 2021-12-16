import base from "@theme-ui/preset-base"
import { merge } from "theme-ui"

import "@fontsource/amatic-sc/700.css"
import "@fontsource/amatic-sc/400.css"

const theme = merge(base, {
  colors: {
    primary: "#6d2f9c",
    secondary: "#ffae1e",
  },
  fontSizes: [12, 14, 16, 22, 24, 32, 48, 64, 96],
  fonts: {
    heading: `'Amatic SC', sans-serif`,
    body: `'Amatic SC', sans-serif`,
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  sizes: {
    container: 480,
  },
  layout: {
    root: { height: "100vh" },
    header: {},
    main: {},
    footer: { textAlign: "center" },
    container: {
      maxWidth: "container",
      mx: "auto",
      p: 3,
    },
  },
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
    },
  },
})

console.log(theme)

export default theme
