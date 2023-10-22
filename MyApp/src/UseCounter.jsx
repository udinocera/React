import { useCallback, useState } from "react"


export function UseCounter({initialValue = 0}) {
    const [count, setCount] = useState(initialValue)
    
    const handleAggiungiUno = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const handleRimuoviUno = useCallback(() => {
        setCount((c) => c - 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(initialValue)
    }, [initialValue]);
   
    return {count, handleAggiungiUno, handleRimuoviUno, handleReset}
}

