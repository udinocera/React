import { Link } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <div>
        <h1>Contatore: {count}</h1>
        <button onClick={increment}>Aumenta</button>
        <button onClick={decrement}>Diminuisci</button>
        <button onClick={reset}>Resetta</button>
      </div>
      <Link to="/">Home</Link>
    </>
  );
};