import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import FeatureTrails from "./components/home/FeatureTrails";
import UserProfile from "./pages/home/community/UserProfile";
import TrailsRating from "./pages/home/community/TrailsRatings";
import CommunityForum from "./pages/home/community/CommunityForum";
import SocialSharing from "./pages/home/community/SocialSharing";
import TrailsInfo from "./pages/TrailsInfo";
import ChoosePayment from "./pages/home/premium/ChoosePayment";
import ThankYou from "./pages/payments/ThankYou";
import PaymentSuccess from "./pages/payments/PaymentSuccess";
import PaymentFailure from "./pages/payments/PaymentFailure";
import Trails from "./pages/Trails";
import Review from "./pages/Review";
import MainLayout from "../layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<ChoosePayment />} />
          <Route path="/trials" element={<FeatureTrails />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* HOME/COMMUNITY */}

          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/trail-ratings" element={<TrailsRating />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/social-sharing" element={<SocialSharing />} />
          <Route path="/user-review" element={<Review />} />
          <Route path="/trails" element={<Trails />} />

          <Route path="/trails-info/id/:trailId" element={<TrailsInfo />} />
          <Route path="/trails-info/name/:trailName" element={<TrailsInfo />} />

          <Route path="*" element={<p>Page Not Found</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
