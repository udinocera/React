import { Counter } from "./Counter";
import FilteredList from "./FilteredList";











function App() {
  
  return (
    <>
    <FilteredList
    list={[
      {
        name: "Umberto",
        id:34,
        age: 21,
      },
      {
        name: "Luca",
        id:365,
        age: 2,
      },
      {
        name: "Maria",
        id:3,
        age: 20,
      },
      {
        name: "Anna",
        id:35,
        age: 41,
      },
      {
        name: "Melania",
        id:54,
        age: 11,
      },
    ]}
     />
    </>
  )
}

export default App;
