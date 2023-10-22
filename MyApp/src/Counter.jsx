import { UseCounter } from "./UseCounter"

 export function Counter(){

    const {count, handleAggiungiUno, handleRimuoviUno, handleReset } = UseCounter(0)
    return(

        <>
        <h1>{count}</h1>
        <button onClick={handleAggiungiUno}>+</button>
        <button onClick={handleRimuoviUno}>-</button>
        <button onClick={handleReset}>Reset</button>
        </>
       
           
        
    )
}