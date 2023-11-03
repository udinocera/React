import useSWR from "swr"

export function useGithubUser(username) {
    const fetcher = (url) => fetch(url).then(res => res.json());
    const { data, error, isLoading } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {data, error, isLoading}

}