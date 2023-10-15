import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MultiButton } from "./MultiButton";
import Welcome from "./Welcome";

import { FocusableInput } from "./FocusableInput";

import { MyList } from "./MyList";
import { Colors } from "./Colors";
import Login from "./Login";


function App() {
  const color = [
     { id: 1, name: "rosso"},
     { id: 2, name: "verde"},
     { id: 3, name: "blu"},
  ];

  return (
    <>
      <Counter inizio={0} incremento={1}/>

      <Clock />

      <MultiButton />

      <FocusableInput />

      <MyList />

      <Colors items={color} />

      <Welcome />

      <Login />




      
    </>

  )
}

export default App;
