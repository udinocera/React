import { useState } from "react"


export function UseCounter({initialValue = 0}) {
    const [count, setCount] = useState(initialValue)
    
    function handleAggiungiUno (){
        setCount(count + 1)
    }

    function handleRimuoviUno(){
        setCount(count - 1)
    }

    function handleReset(){
        setCount(initialValue)
    }
    return {count, handleAggiungiUno, handleRimuoviUno, handleReset}
}

