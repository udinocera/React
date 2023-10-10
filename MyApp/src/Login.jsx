/* eslint-disable no-unused-vars */
import React, { useState } from "react"


function Login(){

    const [data, setData] = useState({
        username : '',
        password: '',
        ricorda: false,
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        console.log(event)

        setData((data => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            };
        }));
    };




    return(
        <form>
            <label htmlFor="username">User</label>
            <input type="text" name="username" id="username" value={data.username} onChange={handleInputChange}/>
<hr />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={data.password} onChange={handleInputChange}/>
<hr />
            <label htmlFor="checkbox">Ricorda</label>
            <input type="checkbox" name="ricorda" id="checkbox" checked={data.ricorda} onChange={handleInputChange}/>
        </form>
    )
}



export default Login;