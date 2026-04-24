import { Route } from "react-router-dom";
import UserProfile from "../pages/home/community/UserProfile";
import CommunityForum from "../pages/home/community/CommunityForum";
import SocialSharing from "../pages/home/community/SocialSharing";
import Review from "../pages/Review";

export const standaloneRoutes = [
  <Route path="/user-profile" element={<UserProfile />} />,
  <Route path="/community-forum" element={<CommunityForum />} />,
  <Route path="/social-sharing" element={<SocialSharing />} />,
  <Route path="/user-review" element={<Review />} />,
];
