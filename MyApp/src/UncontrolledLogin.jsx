/* eslint-disable no-unused-vars */
import React from "react";

export function UncontrolledLogin(){
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        /*
        1) Vantaggi Semplicità nell'estrarre i valori e la compatibilità con vari browser
        2) Svantaggi Limitazione valori null

        */

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const remember = event.target.elements.namedItem("remember").checked

        const data = {
            username,
            password,
            remember,
        };

        console.log(data)

    }
return(
    <form onSubmit={handleFormSubmit} >
        <label htmlFor="username:">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password:">Password</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="checkbox">Remember:</label>
        <input type="checkbox" name="remember" id="remember" />

        <button type="submit">Login</button>

        <button type="reset">Reset</button>
    </form>
)
}