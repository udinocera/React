/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Welcome ({name, age}) {
    return ( 
    <div>
    <p>Welcome, {name}!</p>
    {age>=18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
    </div>
    );
}