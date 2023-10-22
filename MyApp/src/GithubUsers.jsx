/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUsers = () =>{
    const [searchUsername, setSearchUsername] = useState("")
    const [usernames, setUsernames] = useState([])

    const handleSearchChange = (e) => {
        setSearchUsername(e.target.value)
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setUsernames((data) => {
            return([...data, searchUsername])
        });
        setSearchUsername("")
    };
    return(
        <>
        <form onSubmit={handleSearchSubmit}>
            <input type="text" value={searchUsername} onChange={handleSearchChange} />
            <button type="submit">Cerca</button>
        </form>
        <ul>
            {usernames.map((username, index) => (
                <li key={index}>
                    <GithubUser username= {username} />
                </li>
            ))}
        </ul>
        </>
    )
}