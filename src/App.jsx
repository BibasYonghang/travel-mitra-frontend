import { Route, Router, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"
import Premium from "./components/sections/Premium"
import ScrollToTop from "./ScrollToTop"
import Trails from "./components/sections/Trails"
import FeaturedTrails from "./components/home/FeatureTrails"
import UserProfile from "./components/HikingCommunity/UserProfile"
import TrailsRating from "./components/HikingCommunity/TrailsRatings"
import CommunityForum from "./components/HikingCommunity/CommunityForum"
import SocialSharing from "./components/HikingCommunity/SocialSharing"



function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="premium" element={<Premium />} />
          <Route path="trials" element={<Trails />} />
          <Route path="trials" element={<FeaturedTrails />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="trail-ratings" element={<TrailsRating />} />
          <Route path="community-forum" element={<CommunityForum />} />
          <Route path="social-sharing" element={<SocialSharing />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
