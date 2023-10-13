/* eslint-disable react/prop-types */
import { useState } from "react"
import { Button } from "./Button"
import { useEffect } from "react"
import { CounterDisplay } from "./CounterDisplay"

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

    useEffect(() =>{
        console.log(count)
    },[count])

    const counterContainer = {
        backgroundColor: "blue",
        padding: 20,
        border: "black 3px solid",
        borderRadius: 20,
    };

  

    return(
        <div style={counterContainer}>
           <CounterDisplay count={count} />
           <Button  name="Aggiungi" event={handleAggiungiUno} />
           <Button  name="Rimuovi" event={handleRimuoviUno}  />
           <Button  name="Reset" event={handleReset}  />
        </div>
    )
}