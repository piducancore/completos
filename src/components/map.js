/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import MapGL, { GeolocateControl } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_TOKEN

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10,
}
const positionOptions = { enableHighAccuracy: true }

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: -35.43886,
    longitude: -71.65988,
    zoom: 14,
    bearing: 0,
    pitch: 48,
  })

  return (
    <div sx={{ height: "80vh" }}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/piducancore/ckvxvtnvy0iug15l8hcb207rm"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
      </MapGL>
    </div>
  )
}
