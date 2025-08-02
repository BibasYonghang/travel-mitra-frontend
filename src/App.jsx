import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"



function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>


    </>
  )
}

export default App
