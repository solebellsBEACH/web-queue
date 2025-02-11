"use server"
import React from 'react'
import { HomeComponents } from './components'

function HomePage() {
    return (
        <>
            <HomeComponents.HeaderQueue />
            <HomeComponents.DescriptionContent />
        </>
    )
}

export default HomePage