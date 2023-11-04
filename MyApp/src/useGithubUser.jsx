/* eslint-disable react-hooks/rules-of-hooks */

import useSWR from "swr"

export function useGithubUser(username) {
    const fetcher = (url) => fetch(url).then(res => res.json());

    if (username) {
    const { data, error, isLoading, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);

    const handleRefetchBtn = () => {
        mutate();
    }
    return { data, error, isLoading, handleRefetchBtn } 
}

return { data: null, error: null, isLoading: false}
}