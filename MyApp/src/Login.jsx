/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

 function Login ({onLogin}) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setData(data => {
      return {
        ...data,
        [name]: value
      }
    });
  }

  const isButtonDisabled = data.username === "" || data.password === "";

  const handleLogin = (event) => {
    event.preventDefault()
    onLogin(data);
  };

  return(
    <>
    <form>
      <input type="text" name="username" value={data.username} onChange={handleInputChange}/>
      <input type="password" name="password" value={data.password} onChange={handleInputChange} />
      <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange}/>
      <button
       style={{backgroundColor: data.password.length < 8 ? "red" : "green"}} onClick={handleLogin} disabled={isButtonDisabled}>Login</button>
    </form>
    </>
  )
}

export default Login