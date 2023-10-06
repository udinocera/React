/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Age } from "./Age"
export function Welcome ({name, age}) {
    return ( 
    <div>
    <p>Welcome, {name}!</p>
    <Age age={21}/>
    </div>
    );
}