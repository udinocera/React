import { Hello } from "./Hello";


function App(){

  function Message(){
    return <p>What a beautiful day!</p>
  }

  return(
    <>
    <div>
    <Hello/>
    <Message/>
    </div>
  
    </>
    //Funziona lo stesso
  )
}

export default App