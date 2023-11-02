/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export const Welcome =  ({ name }) => {
    return ( 
    <div className="welcome">
    <p>Welcome, {name}!</p>
    <Link to="/counter">Counter</Link> | <Link to="users/udinocera">Profilo GitHub</Link>
    </div>
    );
}
