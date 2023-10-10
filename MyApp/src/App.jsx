import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";
import { UncontrolledLogin } from "./UncontrolledLogin";


function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <UncontrolledLogin />




      
    </>

  )
}

export default App;
