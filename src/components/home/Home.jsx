import React, { useState } from 'react'
import Intro from './Intro'
import PopularSearches from './PopularSearches'
import Footer from './Footer'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");  // <---- define state here

    return (
        <>
            {/* Pass state and setter to Intro */}
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {/* Pass searchTerm only to PopularSearches */}
            <PopularSearches searchTerm={searchTerm} />
            <Footer />
        </>
    )
}