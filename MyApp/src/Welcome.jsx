/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Welcome ({name, age}) {
    return ( 
    <div>
    {name==="John" &&<p>Welcome, {name}!</p>}
    {age>=18 && age<= 65 &&<p>You are {age} years old</p>}
    </div>
    );
}