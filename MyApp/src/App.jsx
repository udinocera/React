import './App.css'

function App() {
  function sayHello (name) {
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
    {sayHello("Umberto")}
    </>
  )
}

export default App
