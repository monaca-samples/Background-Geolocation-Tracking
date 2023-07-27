import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './openstreemap.module.css'

const OpenStreetMap = (props) => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
  const ZOOM_LEVEL = 2
  const mapRef = useRef()

  return (
    <>
      <div className='container'>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} className={styles.map}>
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
