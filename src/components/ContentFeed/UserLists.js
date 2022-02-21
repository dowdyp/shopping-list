import React, { useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import './userlists.css'

function UserLists({setLocation, userLists}) {
    
    useEffect(() => {
        setLocation("Your Lists")
    }, [])
    
    const lists = userLists.map(list =>
      <ShoppingList key={list.id} storeName={list.name} total={list.total} numberOfItems={list.numberOfItems} />
    );
    
    return (
        lists
    )
}

export default UserLists