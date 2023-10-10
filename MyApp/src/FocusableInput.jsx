/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

export function FocusableInput(){

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[]) 


    return(
        <div>
            <label htmlFor="username">Nome utente</label>
            <input ref={inputRef} type="text" name="username" id="username" />
        </div>
    )
}