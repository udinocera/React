/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Age } from "./Age";

export function Welcome({ name, age }) {

  return (
    <div>
      <p>Welcome, {name}!</p>
      {age >= 18 ? <Age age={age}/> : <p>You are very young!</p>}
    </div>
  );
}
