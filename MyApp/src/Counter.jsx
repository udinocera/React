import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }

    //FUNZIONE Dentro setCount se dobbiamo fare + Operazioni
    //Altrimenti se dobbiamo fare una sola operazione utilizziamo un valore immediato

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    )
}