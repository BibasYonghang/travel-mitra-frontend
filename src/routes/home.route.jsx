import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

export const homeRoutes = [
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
  </Route>,
];
