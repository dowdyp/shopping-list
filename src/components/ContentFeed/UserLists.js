import React, { useEffect, useState } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import axios from 'axios';
import './userlists.css'

export default function UserLists(props) {

    const [userLists, setUserLists] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        props.setLocation("Your Lists")
        await axios({
            method: "GET",
            url: "/lists",
            withCredentials: true,
        }).then((res) => {
            if (res.data.length) {
                setUserLists(res.data)
            }
        });
    }, [])

    return (
        ((userLists.length) ? (userLists.map(list => 
            <ShoppingList 
                key={list["_id"]}
                storeName={list["name"]} 
                total={list["total"]} 
                numberOfItems={list["items"].length} />  )) 
            : 
            <div>No Lists</div>
        )
    )
}