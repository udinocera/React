import { AlertClock } from "./AlertClock";

function App() {

  function handleButtonClick(){
    alert("Sono le " + new Date().toLocaleTimeString())
  }
  
  return (
    <>
      <AlertClock event={handleButtonClick}/>
    </>

  );
}

export default App;
