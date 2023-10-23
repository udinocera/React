/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Welcome({ name, age }) {

  return (
    <>
      {name === "John" && <h1>Welcome, {name}!</h1>}
      {age >= 18 && age <= 65 && <p>You are {age} years old</p>}
    </>
  );
}
