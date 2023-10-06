/* eslint-disable react/prop-types */
import { useState } from "react"

export function Counter( {inizio, incremento}){
    const [count, setCount] = useState(inizio)
    function handleClick(){
        setCount(count + incremento)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    )
}