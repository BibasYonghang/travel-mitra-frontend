import React, { useState } from 'react'
import Intro from './Intro'
import PopularSearches from './PopularSearches'
import Footer from './Footer'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");  // <---- define state here

    return (
        <>
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PopularSearches searchTerm={searchTerm} />
            <Footer />
        </>
    )
}