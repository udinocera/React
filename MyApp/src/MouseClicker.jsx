/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cuore from "/cuore.png"

export function MouseClicker(props) {
    const handleClick = (event) => {
        console.log(event.currentTarget.name);
    };

    const handleImageClick = (event) => {
        console.log(event.target.src);
        event.stopPropagation();
    }

    return(
        <>
        <button name={props.name} onClick={handleClick}>Click Me
        <img src={Cuore} alt="icon" onClick={handleImageClick} />
        </button>
        </>
        //Si, Ciò accade a causa del bubbling di eventi in React
    )
}
