import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import 'leaflet/dist/leaflet.css'
import styles from './openstreemap.module.css'

const OpenStreetMap = (props) => {
  const [center, setCenter] = useState({ lat:  36.028514, lng: 138.576491 })
  const ZOOM_LEVEL = 3
  const mapRef = useRef()

  const position = props.position
  const positionIsEmpty = position == null || position.length == 0
  
  const [polyline, setPolyline] = useState([])
  const showPolyline = props.showPolyline
  const limeOptions = { color: 'lime' }

  useEffect(() => {
    if (!positionIsEmpty)
      setPolyline(oldPolyline => [...oldPolyline, position])
  }, [position])

  useEffect(() => {
    if (showPolyline != null && !showPolyline)
      setPolyline([])
  },[showPolyline])
  
  return (
    <>
      <div className='container'>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} className={styles.map}>
          <LocationMarker position={position} positionIsEmpty={positionIsEmpty}/>
          {!showPolyline ? null : (
            <Polyline pathOptions={limeOptions} positions={polyline}></Polyline>
          )}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </MapContainer>
      </div>
    </>
  )
}

export default OpenStreetMap
