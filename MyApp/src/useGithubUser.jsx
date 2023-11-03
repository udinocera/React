/* eslint-disable react-hooks/rules-of-hooks */

import useSWR from "swr"

export function useGithubUser(username) {
    const fetcher = (url) => fetch(url).then(res => res.json());

    if (username) {
    const { data, error, isLoading } = useSWR(`https://api.github.com/users/${username}`, fetcher)
    return { data, error, isLoading } 
}

return { data: null, error: null, isLoading:false}
}