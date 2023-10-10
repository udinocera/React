/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export function Colors({items}){
    return(
        <ul>
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    )
}