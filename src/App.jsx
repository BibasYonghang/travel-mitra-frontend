import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"
import Premium from "./components/sections/Premium"



function App() {

  return (
    <>
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
