/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export function UseGithubUser(username){

    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch (`https://api.github.com/users/${username}`);
            if(!response.ok) {
                throw new Error("Errore")
            }
            const dataJSON = await response.json();
            setData(dataJSON)
            
        } catch (error) {
            setError(error);
            
        }finally {
            setLoading(false)
        }
    }
    

    useEffect(() => {
        fetchData()
    }, [username]);

    return {data, error, loading}
}