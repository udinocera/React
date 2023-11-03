/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

   async function fetchData(username) {
    try {
      setLoading(true);
      const response = await fetchData (`https://api.github.com/users/${username}`);
      const data = await response.json();
      setData(data);

    } catch (error) {
      setError(error);
    }finally{
      setLoading(false);
    }
   }

   useEffect(() => {
    fetchData(username);
   },[username]);

    return(
        <>
        {loading && <h1>Loading...</h1>}
        <h1>{data?.login}</h1>
        <img src={data?.avatar_url} style={{borderRadius: "5%"}} />
        <h2>{data?.name}</h2>
        </>
    )
}