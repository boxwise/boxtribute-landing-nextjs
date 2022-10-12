import React from "react"
import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"
// import Link from 'next/link'
// import Image from 'next/image'

export interface MapPointer {
    nameplace: string
    nameorganisation: string
    lat: number
    long: number
    description: string
}

export interface MapSectionData {
    map_pointers: Array<MapPointer>
}


const MapSection = ({ map_pointers }: MapSectionData) => {

    const CustomIcon = icon({
      iconUrl: "/boxtribute-logo.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    return (
    <div className="flex flex-row flex-wrap justify-center">  
     <MapContainer
    center={[51.505, -0.09]}
    zoom={4}
    scrollWheelZoom={false}
    style={{ height: 400, width: "50%" }}
  >
    <TileLayer
      attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
    />
    {map_pointers.map(pointer => (
        <Marker icon={CustomIcon} position={[pointer.lat, pointer.long]}>
        <Popup>
            <h3>{pointer.nameplace}</h3>
            <h4>{pointer.nameorganisation}</h4>
            <p>{pointer.description}</p>
        </Popup>
      </Marker>
      ))}
    </MapContainer>
        

    </div>
    )
}

export default MapSection
