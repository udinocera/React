/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

export function Mounted(){

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current){
            isMounted.current = true;
            console.log("Componente montato per la prima volta")
        } else {
            console.log("Già montato")
        }
       
        
    }, [])

    return(
      <>
      <h1>Componente montato</h1>
      </>  
    )
}