import { Link, useParams } from "react-router-dom";

import { GithubUser } from "./GithubUser";

export const ShowGithubUser = () => {
    const { username } = useParams()

    return(
        <>
        <GithubUser username={username} />
        <Link to="/"> Home</Link>
        </>
    )
}