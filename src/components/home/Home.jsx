import React, { useState } from 'react'
import Intro from './Intro'
import PopularSearches from './PopularSearches'
import Footer from './Footer'
import ContactUs from './ContactUs';
import FeatureGuide from './FeatureGuide';
import TrailCard from './TrailCard';
import TrailList from './TrailList';
import PremiumSection from './PremiumSection';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");  // <---- define state here

    return (
        <>
            <Intro searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PopularSearches searchTerm={searchTerm} />
            <FeatureGuide />
            <PremiumSection />
            <TrailCard />
            <TrailList />
            <ContactUs />
            <Footer />
        </>
    )
}