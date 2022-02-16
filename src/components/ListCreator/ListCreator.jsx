import React, { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import ShoppingListItems from '../ShoppingListItem/ShoppingListItems';
import './listcreator.css';

function ListCreator(props) {
    
    const items = []

    const navigate = useNavigate()
    const [editing, setIsEditing] = useState(false);
    const [value, setValue] = useState("");
    const [listItems, setItems] = useState(items)
    const [name, setName] = useState("")

    useEffect(() => {
        props.setLocation("New List")
    }, [])

    const addItemHandler = () => {
        setItems(items => [...items, {name: value, total: 500}])
        setValue("")
        setIsEditing(false);
    }

    const handleListNameChange = (event) => {
        setName(event.target.value)
    }

    const handleItemNameChange = (event) => {
        setValue(event.target.value)
    }

    const submitNewList = () => {
        addListToUser(name, listItems)
        navigate('/', {replace: true})
    }

    const { addListToUser } = props;

    return (
        <div>
            <div className="list-form">
                <input type="text" placeholder="Name" onChange={handleListNameChange}></input>
                <button onClick={submitNewList}>Save List</button>
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