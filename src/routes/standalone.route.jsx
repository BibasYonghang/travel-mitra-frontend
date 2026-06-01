import { Route } from "react-router-dom";
import UserProfile from "../pages/home/community/UserProfile";
import CommunityForum from "../pages/home/community/CommunityForum";
import SocialSharing from "../pages/home/community/SocialSharing";
import Review from "../pages/Review";
import Trails from "../pages/trails/Trails";
import Orders from "../pages/Orders";

export const standaloneRoutes = [
  <Route path="/user-profile" element={<UserProfile />} />,
  <Route path="/profile" element={<UserProfile />} />,
  <Route path="/orders" element={<Orders />} />,
  <Route path="/trekking" element={<Trails />} />,
  <Route path="/community-forum" element={<CommunityForum />} />,
  <Route path="/social-sharing" element={<SocialSharing />} />,
  <Route path="/user-review" element={<Review />} />,
];
