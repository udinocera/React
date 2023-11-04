/* eslint-disable react/prop-types */

import { useGithubUser } from "./useGithubUser";


export const GithubUser = ({ username }) => {
  const { data, error, isLoading , handleRefetchBtn} = useGithubUser(username);

  return (
    <>
    <button onClick={handleRefetchBtn}>Refetch</button>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>{error.message}</h1>}
    <h1>{data?.login}</h1>
    <h3>{data?.name}</h3>
    <img src={data?.avatar_url} />
    </>
  )
};
