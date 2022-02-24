import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

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
        console.log("sendin")

        Axios({
            method: "POST",
            data: {
              username: email,
              password: password,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
          }).then((res) => {
            if (res.status === 401) {
                console.log("Incorrect Credentials")
            } else {
                props.setIsUserAuthenticated(true)
                navigate("/", { replace: true })
            }
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
            <div>Don't have an account? <Link to="/register">Register</Link></div>
        </form>
    )
}