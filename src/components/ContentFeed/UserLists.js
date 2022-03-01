import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        ((userLists.length) ? (userLists.map((list, index) => 
            <Link to={`list/${list["_id"]}`}><ShoppingList 
                key={index}
                storeName={list["listName"]} 
                total={list["listTotal"]} 
                numberOfItems={list["numberOfItems"]} /></Link>  )) 
            : 
            <div>No Lists</div>
        )
    )
}