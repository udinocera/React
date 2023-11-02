/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
    const API_URL = `https://api.github.com/users/${username}`
    
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const result = await response.json();
                setData(result);

            } catch (error) {
                console.error(error.message)
                
            }
        }
        fetchData();
    },[]) 

    return(
        <>
        {
            data && (
                <div>
                   <img style={{borderRadius:"5%"}} src={data.avatar_url} />
                   <h1>{data.login}</h1>
                   <h2>{data.name}</h2>
                </div>
            )
        }
        </>
    )
}