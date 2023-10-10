/* eslint-disable no-unused-vars */
import React from "react";

export function UncontrolledLogin(){
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        /*Vari modi

        1)
        const username = event.target.elements.namedItem("username").value
       
        2)
        const username = event.target.elements.username.value;

        3)
        const username= event.target.username.value;

        4)
        const data = {
            username: formData.get("username")
        }

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