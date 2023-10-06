/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Welcome ({name, age}) {
    return ( 
    <div>
    <p>Welcome, {name}!</p>
    {age>=18 && <p>You are {age} years old</p>}
    </div>
    );
}