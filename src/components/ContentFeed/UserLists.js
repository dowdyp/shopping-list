import React, { useEffect, useState } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import axios from 'axios';
import './userlists.css'

export default function UserLists(props) {

    const [userLists, setUserLists] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        props.setLocation("Your Lists")
        axios({
            method: "GET",
            url: "/lists",
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
            if (res.data.length !== 0) {
                setUserLists(res.data.lists)
            }
            setLoading(false)
        });
    }, [])

    return (
        ((!isLoading && userLists !== undefined && userLists.length > 0) ? (userLists.map(list => 
            <ShoppingList 
                key={list.id} 
                storeName={list.name} 
                total={list.total} 
                numberOfItems={list.numberOfItems} />  )) 
            : 
            <div>No Lists</div>
        )
    )
}