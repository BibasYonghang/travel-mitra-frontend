import React, { useState } from 'react'
import Intro from '../../components/home/Intro';
import PopularSearches from '../../components/home/PopularSearches';
import Personalization from '../../components/home/Personalization';
import FeatureTrails from '../../components/home/FeatureTrails';
import Premium from '../../components/home/Premium';
import Community from '../../components/home/Community';
import Reviews from '../../components/home/Reviews';
import ContactUs from '../../components/home/ContactUs';
import Map from '../../components/home/Map';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");  // <---- define state here

    return (
        <div className='bg-white'>
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PopularSearches searchTerm={searchTerm} />
            <Map />
            <FeatureTrails />
            <Premium />
            <Community />
            <Reviews />
            <ContactUs />
        </div>
    )
}