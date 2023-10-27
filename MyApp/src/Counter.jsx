/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    console.log(`The current value of counter is: ${counter}`);
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + increment);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - decrement);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const counterContainer = {
    backgroundColor: "cyan",
    padding: 20,
    border: "black 3px solid",
    borderRadius: 20,
};



  return (
    <>
      <div style={counterContainer}>
        <CounterDisplay count={counter} />
        <button onClick={handleIncrement} >
          Increment {increment}
        </button>
        <button onClick={handleDecrement} >
          Decrement {decrement}
        </button>
        <button onClick={handleReset} >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;