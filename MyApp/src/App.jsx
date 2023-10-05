import './App.css'

function App() {
  function sayHello (name) {
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
    {sayHello()}
    </>

    //Non passando alcun parametro alla funziona, in pagina uscirà soltanto Hello !
  )
}

export default App
