import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";

import Login from "./Login";


function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <Login />




      
    </>

  )
}

export default App;
