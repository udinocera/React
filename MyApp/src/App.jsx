import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";

import { FocusableInput } from "./FocusableInput";
import { Mounted } from "./Mounted";


function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <FocusableInput />

      <Mounted />




      
    </>

  )
}

export default App;
