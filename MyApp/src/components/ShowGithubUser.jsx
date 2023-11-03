import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export const ShowGithubUser = () => {
    const { username } = useParams()

    return(
        <>
        <GithubUser username={username} />
        </>
    )
}