import { Counter } from "./Counter";
import { Clock } from "./Clock";

function App() {
  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />
    </>

  )
}

export default App;
