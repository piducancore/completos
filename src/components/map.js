/** @jsx jsx */
import { Flex, jsx, Themed } from "theme-ui"
import MapGL, { FlyToInterpolator, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl, Popup, Layer } from "react-map-gl"
import mb from "mapbox-gl"
import { useState, useRef } from "react"
import { easeBounceOut } from "d3-ease"
import { Rating } from "react-simple-star-rating"

import "mapbox-gl/dist/mapbox-gl.css"

import useViewport from "../useViewport"

mb.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

export default function Map() {
  const { viewport, setViewport } = useViewport()
  const [popup, setPopup] = useState(null)
  const ref = useRef()
  const onLoad = () => {
    const map = ref.current.getMap()
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      // maxzoom: 16,
    })
    map.setTerrain({ source: "mapbox-dem", exaggeration: 3.2 })
  }

  const handleClick = e => {
    let feat = e.features.length > 0 && e.features[0].layer["source-layer"] === "completosTalca" ? e.features[0] : false
    if (feat) {
      e.preventDefault()
      setViewport({
        ...viewport,
        longitude: feat.geometry.coordinates[0],
        latitude: feat.geometry.coordinates[1],
        // zoom: 16,
        transitionDuration: "auto",
        transitionInterpolator: new FlyToInterpolator({ curve: 1.6, speed: 1.6 }),
        transitionEasing: easeBounceOut,
      })
      setPopup(feat)
    }
  }
  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/piducancore/ckvxvtnvy0iug15l8hcb207rm"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
      onClick={handleClick}
      onLoad={onLoad}
      ref={ref}
    >
      {popup && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popup.geometry.coordinates[0]}
          latitude={popup.geometry.coordinates[1]}
          closeOnClick={true}
          offsetTop={32}
          onClose={setPopup}
        >
          <Themed.p sx={{ my: 0 }}>{popup.properties.title}</Themed.p>
          <Flex sx={{ alignItems: "center" }}>
            <Rating
              allowHalfIcon
              onClick={() => console.log("lala")}
              ratingValue={(100 * popup.properties.totalScore) / 5} /* Available Props */
              size={16}
            />
            <span sx={{ ml: 1 }}>({popup.properties.reviewsCount})</span>
          </Flex>
        </Popup>
      )}
      <GeolocateControl sx={{ margin: 10 }} positionOptions={{ enableHighAccuracy: true }} /* trackUserLocation auto */ />
      <FullscreenControl sx={{ margin: 10, top: 36 }} />
      <NavigationControl sx={{ margin: 10, top: 72 }} />
      <ScaleControl sx={{ margin: 10, bottom: 36 }} />
    </MapGL>
  )
}
