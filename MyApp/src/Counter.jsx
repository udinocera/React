/* eslint-disable react/prop-types */
import { useState } from "react"
import { Button } from "./Button"

export function Counter({inizio, incremento}){
    const [count, setCount] = useState(inizio)
    
    function handleAggiungiUno (){
        setCount(count + incremento)
    }

    function handleRimuoviUno(){
        setCount(count - incremento)
    }

    function handleReset(){
        setCount(0)
    }

    return(
        <div>
           <h2>{count}</h2> 
           <Button name="Aggiungi" event={handleAggiungiUno} />
           <Button name="Rimuovi" event={handleRimuoviUno} />
           <Button name="Reset" event={handleReset} />
        </div>
    )
}