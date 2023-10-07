import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MouseClicker />
    </>

  )
}

export default App;
