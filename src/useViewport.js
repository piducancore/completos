import create from "zustand"

const useViewport = create(set => ({
  viewport: {
    latitude: -35.43886,
    longitude: -71.65988,
    zoom: 14,
    bearing: 0,
    pitch: 48,
  },
  setViewport: newViewport => {
    set(state => ({
      viewport: {
        ...state.viewport,
        ...newViewport,
      },
    }))
  },
}))

export default useViewport
