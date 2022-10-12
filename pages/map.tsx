import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import L from "leaflet"

export interface ITeamMember {
    name: string
    role: string
    picture: string
    link: string
}

export interface ITeamSectionData {
    team_members: Array<ITeamMember>
}

export const Partners = () => {
    // var map = L.map('map', {
    //     minZoom: 1,
    //     maxZoom: 18,
    //     center: [-33.8521, 151.2111],
    //     zoom: 13,
    //     layers: [
    //       L.TileLayer.Provider('Stamen.TonerBackground', { className: 'toner-background' }),
    //       L.TileLayer.Provider('Stamen.TonerLines', { className: 'toner-lines' }),
    //       L.TileLayer.Provider('Stamen.TonerLabels', { className: 'toner-labels' })
    //     ],
    //   })
    return <div>

        Partners
    </div>
}

export default Partners