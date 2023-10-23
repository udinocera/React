/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Welcome({ name, age }) {
    
  return (
    <>
      <p>Welcome, {name}!</p>
      {age && <p>You are {age} years old</p>}
    </>
  );
}
