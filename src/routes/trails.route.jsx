import { Route } from "react-router-dom";
import FeatureTrails from "../components/home/FeatureTrails";
import TrailsRating from "../pages/home/community/TrailsRatings";
import Trails from "../pages/trails/Trails";
import TrailsInfo from "../pages/trails/TrailsInfo";

export const trailsRoutes = [
  <Route path="/trials" element={<FeatureTrails />} />,
  <Route path="/trail-ratings" element={<TrailsRating />} />,
  <Route path="/trails" element={<Trails />} />,
  <Route path="/trails-info/id/:trailId" element={<TrailsInfo />} />,
  <Route path="/trails-info/name/:trailName" element={<TrailsInfo />} />,
];
