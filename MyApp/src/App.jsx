import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";

function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />
    </>

  )
}

export default App;
