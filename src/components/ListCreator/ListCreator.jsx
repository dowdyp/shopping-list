import React, { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import ShoppingListItems from '../ShoppingListItem/ShoppingListItems';
import axios from 'axios';
import './listcreator.css';

function ListCreator(props) {
    
    const items = []

    const navigate = useNavigate()
    const [editing, setIsEditing] = useState(false);
    const [value, setValue] = useState("");
    const [listItems, setItems] = useState(items)
    const [listTotalValue, setListTotalValue] = useState(0)
    const [listName, setListName] = useState("")
    const [itemPrice, setItemPrice] = useState(0)

    useEffect(() => {
        props.setLocation("New List")
    })

    const addItemHandler = () => {
        setItems(items => [...items, {completed: false, name: value, itemPrice: itemPrice}]);
        setListTotalValue(listTotalValue + itemPrice);
        setValue("");
        setIsEditing(false);
        setItemPrice(0)
    }

    const handleListNameChange = (e) => {
        setListName(e.target.value);
    }

    const handleItemNameChange = (e) => {
        setValue(e.target.value);
    }

    const handleItemPriceChange = (e) => {
        setItemPrice(parseInt(e.target.value) || 0)
    }

    const addListToUser = () => {
        if (listItems.length !== 0) {
            axios({
                method: "POST", 
                data: {
                    listName: listName,
                    total: listTotalValue,
                    items: listItems,
                },
                url: "/add-list",
                withCredentials: true,
            }).then((res) => {
                console.log(res.data.message)
                navigate("/", { replace: true })
            });
        } else {
            console.log("cannot submit empty list")
        }
    }

    return (
        <div>
            <div className="list-form">
                <input type="text" placeholder="Name" onChange={handleListNameChange}></input>
                <button onClick={addListToUser}>Save List</button>
            </div>
            <div>
                {listItems.length === 0 ?
                <div>No items!</div>
                :
                <ShoppingListItems listItems={listItems}/>
                }
            </div>
            {editing ? 
                <div>
                    <input placeholder="Item Name" onChange={handleItemNameChange}></input>
                    <input placeholder="Price" onChange={handleItemPriceChange}></input>
                    <button type="button" onClick={addItemHandler}>Add</button>
                </div>
            :
                null
            }
            <button type="button" onClick={() => setIsEditing(!editing)}><AiOutlinePlusSquare /></button>
        </div>
    )
}

export default ListCreator;