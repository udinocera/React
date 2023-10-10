/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Color from "./Color";

export function Colors({items}){
    return(
        <ul>
        {items.map((item) => (
            <Color item={item} />
        ))}
        </ul>
    )
}