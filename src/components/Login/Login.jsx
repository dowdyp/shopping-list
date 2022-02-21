import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props) {

    useEffect(() => {
        props.setLocation("Login")
    }, [])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }    
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    function handleLogin(e) {
        e.preventDefault()

        const data = {
            email: email,
            password: password
        }
        axios({
            method: "POST",
            data: {
              username: email,
              password: password,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
          }).then((res) => {
            console.log(res)
          });
    };

    return (
        <form onSubmit={handleLogin}>
            <label name="email">Email</label>
            <input placeholder="Email" value={email} onChange={handleEmailChange}></input>
            <br />
            <label name="Password">Password</label>
            <input className="loginInput" placeholder="Password" type="password" value={password} onChange={handlePasswordChange}></input>
            <br />
            <button>Submit</button>
        </form>
    )
}