import { Route } from "react-router-dom";
import UserProfile from "../pages/home/community/UserProfile";
import CommunityForum from "../pages/home/community/CommunityForum";
import SocialSharing from "../pages/home/community/SocialSharing";
import Review from "../pages/Review";
import Trails from "../pages/trails/Trails";
import Orders from "../pages/Orders";
import TrailsSkeleton from "../components/skeletons/TrailsSkeleton";
import TrailInfoSkeleton from "../components/skeletons/TrailInfoSkeleton";
import HomeTrailsSkeleton from "../components/skeletons/HomeTrailsSkeleton";
import ReviewsSkeleton from "../components/skeletons/ReviewsSkeleton";

export const standaloneRoutes = [
  <Route path="/user-profile" element={<UserProfile />} />,
  <Route path="/profile" element={<UserProfile />} />,
  <Route path="/orders" element={<Orders />} />,
  <Route path="/trekking" element={<Trails />} />,
  <Route path="/community-forum" element={<CommunityForum />} />,
  <Route path="/social-sharing" element={<SocialSharing />} />,
  <Route path="/user-review" element={<Review />} />,
  <Route path="/view" element={<TrailsSkeleton />} />,
  <Route path="/see" element={<TrailInfoSkeleton />} />,
  <Route path="/se" element={<HomeTrailsSkeleton />} />,
  <Route path="/ee" element={<ReviewsSkeleton />} />,
];
