import React, { useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import './userlists.css'

function UserLists({setLocation, userLists}) {
    
    useEffect(() => {
        setLocation("Your Lists")
    }, [])
    
    const mapData = (userLists) => {
        const lists = userLists.map(list => 
            <ShoppingList key={list.id} storeName={list.name} total={list.total} numberOfItems={list.numberOfItems} />  )
        return lists
    }

    return (
        userLists ? mapData(userLists) : <div>No Lists</div>
    )
}

export default UserLists