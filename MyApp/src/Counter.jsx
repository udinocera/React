/* eslint-disable react/prop-types */
import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }

    return(
        <div>
            <CounterDisplay value={count} />
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    )
}