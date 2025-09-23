import { Route, Router, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import FeatureTrails from "./components/home/FeatureTrails"
import UserProfile from "./pages/home/community/UserProfile"
import TrailsRating from "./pages/home/community/TrailsRatings"
import CommunityForum from "./pages/home/community/CommunityForum"
import SocialSharing from "./pages/home/community/SocialSharing"
import TrailsInfo from "./pages/TrailsInfo"
import ScrollToTop from "./components/ScrollToTop"
import ChoosePayment from "./pages/home/premium/ChoosePayment"


function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Layout />}>
          {/* HOME PAGE */}
          <Route path="" element={<Home />} />
          <Route path="premium" element={<ChoosePayment />} />
          <Route path="trials" element={<FeatureTrails />} />

          {/* HOME/COMMUNITY */}

          <Route path="user-profile" element={<UserProfile />} />
          <Route path="trail-ratings" element={<TrailsRating />} />
          <Route path="community-forum" element={<CommunityForum />} />
          <Route path="social-sharing" element={<SocialSharing />} />

          <Route path="trials-info" element={<TrailsInfo />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
