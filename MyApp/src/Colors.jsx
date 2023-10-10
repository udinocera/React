/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export function Colors({items}){
    return(
        <ul>
        {items.map((color, index) => (
            <li key={index}>{color}</li>
        ))}
        </ul>
    )
}