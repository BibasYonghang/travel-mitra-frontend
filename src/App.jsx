import { Route, Router, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"
import Premium from "./components/sections/Premium"
import ScrollToTop from "./ScrollToTop"



function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="premium" element={<Premium />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
