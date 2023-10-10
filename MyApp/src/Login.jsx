/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const formData = {
  username: "",
  password: "",
  ricorda: false,
};

function Login({ onLogin }) {
  const [data, setData] = useState(formData);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleResetClick = () => {
    setData(formData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onLogin(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">User</label>
      <input
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <hr />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <hr />
      <button
        type="submit"
        disabled={!data.username || !data.password}
      >
        Login
      </button>
      <hr />
      <button type="reset" onClick={handleResetClick}>
        Reset
      </button>
      <hr />
      <label htmlFor="checkbox">Ricorda</label>
      <input
        type="checkbox"
        name="ricorda"
        id="checkbox"
        checked={data.ricorda}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Login;
