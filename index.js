const fs = require("fs")
const { features } = JSON.parse(fs.readFileSync("completosTalca.geojson", "utf8"))

features.map(feature => {
  const {
    properties: { reviewsCount, title, address, totalScore },
  } = feature
  console.log({ reviewsCount, title, address, totalScore })
})
