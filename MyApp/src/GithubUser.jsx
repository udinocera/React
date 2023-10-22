/* eslint-disable react/prop-types */
import { UseGithubUser } from "./UseGithubUser"


export const GithubUser = ({username}) => {
    const {data, loading, error} = UseGithubUser(username);

    if(loading) {
        return <p>Caricamento</p>
    }

    if(error){
        return <p>Errore: {error.message}</p>
    }

    return(
        <>
        
        <h1>{data?.login}</h1>
        <h2>{data?.name}</h2>
        <img src={data?.avatar_url}/>
        </>


    )
}