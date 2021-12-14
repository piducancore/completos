/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import MapGL, { FlyToInterpolator, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl, Popup } from "react-map-gl"
import mb from "mapbox-gl"
import { useState } from "react"
import { easeBounceOut } from "d3-ease"

import "mapbox-gl/dist/mapbox-gl.css"

import useViewport from "../useViewport"

mb.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

export default function Map() {
  const { viewport, setViewport } = useViewport()
  const [popup, setPopup] = useState(null)
  const handleClick = e => {
    let feat = e.features.length > 0 && e.features[0].layer["source-layer"] === "completosTalca" ? e.features[0] : false
    if (feat) {
      e.preventDefault()
      setViewport({
        ...viewport,
        longitude: feat.geometry.coordinates[0],
        latitude: feat.geometry.coordinates[1],
        transitionDuration: 888,
        transitionInterpolator: new FlyToInterpolator({ curve: 1.6, maxDuration: 888 }),
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
    >
      {popup && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popup.geometry.coordinates[0]}
          latitude={popup.geometry.coordinates[1]}
          closeOnClick={true}
          onClose={setPopup}
        >
          <Themed.p>{popup.properties.title}</Themed.p>
        </Popup>
      )}
      <GeolocateControl sx={{ margin: 10 }} positionOptions={{ enableHighAccuracy: true }} /* trackUserLocation auto */ />
      <FullscreenControl sx={{ margin: 10, top: 36 }} />
      <NavigationControl sx={{ margin: 10, top: 72 }} />
      <ScaleControl sx={{ margin: 10, bottom: 36 }} />
    </MapGL>
  )
}
