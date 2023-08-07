import React, {useEffect, useState} from "react";
import { Marker, useMap, CircleMarker } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

const LocationMarker = (props) => {
    const position = props.position 
    const positionIsEmpty = props.positionIsEmpty
    const map = useMap()

    const redOptions = { color: 'red' }

    useEffect(() => {
        if (!positionIsEmpty){
            map.flyTo(position)
            console.log("flying to position", position)
        }
    },[position])

    return positionIsEmpty ? null : (
         //<Marker position={position} icon={new Icon({iconUrl: './marker-icon.png'})}></Marker>
         <CircleMarker center={position} pathOptions={redOptions} radius={3}></CircleMarker>
    )
}

export default LocationMarker;