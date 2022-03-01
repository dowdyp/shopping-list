import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShoppingListItems from "../ShoppingListItem/ShoppingListItems"

export default function ViewList(props) {
    
    const location = useLocation();
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: location.pathname,
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data.list);
            setListItems(res.data.list.items);
            props.setLocation(res.data.list.listName)
        })
    }, [])
    
    return (
        <ShoppingListItems listItems={listItems} />
    )
}