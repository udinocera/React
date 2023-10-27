import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome"
import  Counter  from "./Counter"




function App(){

  return(
    <>
    <div>
    <Routes>
      <Route path="/" element={<Welcome name="Umberto" />} />
      <Route path="/counter" element={<Counter initialValue={0} increment={1} decrement={1} />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App