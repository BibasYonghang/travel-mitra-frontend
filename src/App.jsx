import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Front from "./Front"



function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Front />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
