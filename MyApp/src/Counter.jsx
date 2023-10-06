import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    )
}