/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export function MouseClicker(props) {
    const handleClick = (event) => {
        console.log(event.target.name);
    };
    return(
        <>
        <button name={props.name} onClick={handleClick}>Click Me</button>
        </>
    )
}
