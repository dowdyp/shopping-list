import React, { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import ShoppingListItems from '../ShoppingListItem/ShoppingListItems';
import './listcreator.css';

function ListCreator(props) {
    
    const test_items = [
        {key: 1, title: "Farts", price: 550},
        {key: 2, title: "Penuis", price: 400}
    ]

    const [editing, setIsEditing] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState(test_items)

    useEffect(() => {
        props.setLocation("New List")
    }, [])

    const addItemHandler = () => {
        items.push({title: value, price: 500})
        setValue("")
        setIsEditing(false);
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <form>
                <div className="list-form">
                    <input type="text" placeholder="Name"></input>
                </div>
                <div>
                    {items.length === 0 ?
                    <div>No items!</div>
                    :
                    <ShoppingListItems items={items}/>
                    }
                </div>
                {editing ? 
                    <div>
                        <input placeholder="Item Name" onChange={handleChange}></input>
                        <button type="button" onClick={addItemHandler}>Add</button>
                    </div>
                :
                    null
                }
                <button type="button" onClick={() => setIsEditing(!editing)}><AiOutlinePlusSquare /></button>
            </form>
        </div>
    )
}

export default ListCreator;