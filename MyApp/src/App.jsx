import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MouseClicker name="one"/>
    </>

  )
}

export default App;
