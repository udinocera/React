import { Welcome } from "./Welcome";

function App() {
  
  return (
    <>
      <Welcome name="" />
      
      <Welcome /> 
      
    </>
    // Se tolgo la prop name comparirà solo Welcome
    // Se non metto name="Umberto, uscirà quello che ho passato alla prop"
  );
}

export default App;
