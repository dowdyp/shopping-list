import React, { useEffect, useState } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import ReactLoading from "react-loading";
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
                setLoading(false)
            }
        });
    }, [])

    return (
        (isLoading) ? <ReactLoading type="bars" color="#808080" /> :
        ((userLists.length) ? (userLists.map((list, index) => 
                <ShoppingList 
                key={ index }
                storeName={ list.listName || "Untitled List" } 
                total={ list.listTotal } 
                numberOfItems={ list.numberOfItems }
                id={ list._id } />
            )) 
            : 
            <div>No Lists</div>
        )
    )
}