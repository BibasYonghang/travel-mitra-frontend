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
            {/* Hero + Search Bar */}
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div id='popular-section'>
                <PopularSearches searchTerm={searchTerm} />
            </div>


            {/* Where things happen (Interactive part) */}
            <Map />

            {/* Highlight main offerings */}
            <FeatureTrails />

            {/* Upsell premium features */}
            <Premium />

            {/* Social proof / community engagement */}
            <Community />

            {/* Real user reviews / trust element */}
            <div id='about-app'>
                <Reviews />
            </div>


            <div id='contact'>
                <ContactUs />
            </div>

        </div>
    )
}