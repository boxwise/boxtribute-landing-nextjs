import React from "react"
import Link from 'next/link'
import Image from 'next/image'

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
    return <div>

        Partners
    </div>
}

export default Partners