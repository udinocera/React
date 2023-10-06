import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

function App() {
  
  return (
    <>
      <Welcome name="John" age={2}/>
      <AlertClock />
    </>

  );
}

export default App;
