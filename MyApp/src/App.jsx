import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";

import { FocusableInput } from "./FocusableInput";

import { MyList } from "./MyList";
import { Colors } from "./Colors";


function App() {
  const color = ["red", "blue", "yellow"]
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <FocusableInput />

      <MyList />

      <Colors items={color} />




      
    </>

  )
}

export default App;
