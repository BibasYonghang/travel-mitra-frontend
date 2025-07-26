import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/home/Home"



function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home/>} />
        </Route>
      </Routes>


    </>
  )
}

export default App
