import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";
import InteractiveWelcome from "./InteractiveWelcome";


function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <InteractiveWelcome />


      
    </>

  )
}

export default App;
