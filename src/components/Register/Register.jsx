import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.setLocation("Register");
  });

  function handleRegister(e) {
    e.preventDefault();

    axios({
        method: "POST",
        data: {
        username: email,
        password: password,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleRegister}>
      <label name="email">Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <br />
      <label name="Password">Password</label>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <button>Submit</button>
    </form>
  );
}
