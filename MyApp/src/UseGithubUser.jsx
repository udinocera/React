/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export function UseGithubUser(username){

    const[data, setData] = useState(null);
    const[error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch (`https://api.github.com/users/${username}`);
            if(!response.ok) {
                throw new Error("Errore")
            }
            const dataJSON = await response.json();
            setData(dataJSON)
            
        } catch (error) {
            setError(error);
            
        }
    }
    

    useEffect(() => {
        fetchData()
    }, []);

    return {data}
}