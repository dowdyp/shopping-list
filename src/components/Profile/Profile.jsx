import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile(props) {

    const [username, setUsername] = useState("");

    useEffect(() => {
        props.setLocation("Profile");

        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/profile",
        }).then((res) => {
            setUsername(res.data.user.username)
        });
        
    })

    return (
        <div>
            poo
            {username}
        </div>
    )
}