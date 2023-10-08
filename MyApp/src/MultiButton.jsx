/* eslint-disable no-unused-vars */
import React from "react";

export function MultiButton(){
    const handleClick = (event) => {
        console.log(event.currentTarget.name);
    };

    return (
        <>
        <button name="one" onClick={handleClick}>Primo</button>
        <button name="two" onClick={handleClick}>Secondo</button>
        <button name="three" onClick={handleClick}>Terzo</button>
        </>
    )
}