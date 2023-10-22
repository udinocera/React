/* eslint-disable react/prop-types */
import { UseGithubUser } from "./UseGithubUser"
export const GithubUser = ({username}) => {
    const {data} = UseGithubUser(username);

    return(
        <>
        
        <h1>{data?.login}</h1>
        <h2>{data?.name}</h2>
        <img src={data?.avatar_url}/>
        </>


    )
}