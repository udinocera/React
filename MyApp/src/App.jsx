import './App.css'

function App() {
  function sayHello (name) {
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
    {sayHello(<h4>Umberto</h4>)}
    </>
  )
}

export default App
