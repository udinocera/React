import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome"




function App(){

  return(
    <>
    <div>
    <Routes>
      <Route path="/" element={<Welcome name="Umberto" />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App