import { Route, Routes, Link } from "react-router-dom"
import { Welcome } from "./components/Welcome"
import { Counter } from"./components/Counter"
import { ShowGithubUser } from "./components/ShowGithubUser"
import NotFound from "./components/NotFound"


function App(){

  return(
    <>
    <nav>
      <Link to ="/">Home</Link> | <Link to ="/counter">Counter</Link> | <Link to ="users/udinocera">GitHub Profilo</Link>
    </nav>
    <div>
    <Routes>
      <Route path="/" element={<Welcome name="Umberto" />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="users/:username" element={<ShowGithubUser />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App