import React, { useState } from 'react'
import Intro from './Intro'
import PopularSearches from './PopularSearches'
import Footer from './Footer'
import ContactUs from './ContactUs';
import PremiumSection from './PremiumSection';
import PersonalizationSection from './PersonalizationSection';
import CommunitySection from './CommunitySection';
import FeaturedTrails from './FeatureTrails';
import SafetyTips from './SafetyTips';
import Reviews from './Reviews';
import Map from './Map';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");  // <---- define state here

    return (
        <>
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PopularSearches searchTerm={searchTerm} />
            <Map />
            <FeaturedTrails />
            <PremiumSection />
            <PersonalizationSection />
            <SafetyTips />
            <CommunitySection />
            <Reviews />
            <ContactUs />
            <Footer />
        </>
    )
}