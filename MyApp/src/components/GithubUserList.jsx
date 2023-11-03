/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const GithubUserList = () => {
  const [searchUsername, setSearchUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSearchChange = (e) => {
    setSearchUsername(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setUsernames((data) => {
      return ([...data, searchUsername]);
    });
    setSearchUsername("");
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchUsername}
          onChange={handleSearchChange}
          placeholder="udinocera"
        />
        <button type="submit">Cerca</button>
      </form>
      <ul>
        {usernames.map((username, index) => (
          <li key={index}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
