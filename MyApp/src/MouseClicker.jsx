/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cuore from "/cuore.png"

export function MouseClicker(props) {
    const handleClick = (event) => {
        console.log(event.currentTarget.name);
    };
    return(
        <>
        <button name={props.name} onClick={handleClick}>Click Me
        <img src={Cuore} alt="icon" />
        </button>
        </>
    )
}
