import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";

import { FocusableInput } from "./FocusableInput";


function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <FocusableInput />




      
    </>

  )
}

export default App;
