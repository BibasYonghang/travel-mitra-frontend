import { Route, Router, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"
import Premium from "./components/sections/Premium"
import ScrollToTop from "./ScrollToTop"
import Trails from "./components/sections/Trails"
import FeaturedTrails from "./components/home/FeatureTrails"



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
        </Route>
      </Routes>

    </>
  )
}

export default App
