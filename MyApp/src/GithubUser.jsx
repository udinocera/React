/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export function GithubUser({username}){

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    async function fetchData(username){
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json();
            setData(data);
            
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(username)
    }, [username]);
    return(
        <>
        {loading && <h1>Caricamento...</h1>}
        <h1>{data?.login}</h1>
        <h2>{data?.name}</h2>
        <img src={data?.avatar_url}/>
        </>


    )
}