import React, {useEffect, useState} from "react";
import { Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

const LocationMarker = (props) => {
    const position = props.position 
    const positionIsEmpty = position == null || position.length == 0
    const map = useMap()

    useEffect(() => {
        if (!positionIsEmpty){
            map.flyTo(position)
            console.log("flying to position", position)
        }
    },[position])

    return positionIsEmpty ? null : (
        <Marker position={position} icon={new Icon({iconUrl: './marker-icon.png'})}></Marker>
    )
}

export default LocationMarker;