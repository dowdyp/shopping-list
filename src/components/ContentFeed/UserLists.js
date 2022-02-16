import React, { useEffect } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import './userlists.css'

function UserLists(props) {
    
    useEffect(() => {
        props.setLocation("Your Lists")
    }, [])

    const test_list = [
        {id: 1, name: "Home Depot", total: 127.40, numberOfItems: 3},
        {id: 2, name: "Microcenter", total: 2938.49, numberOfItems: 2},
        {id: 3, name: 'Sam\'s Club', total: 144.44, numberOfItems: 14}
    ]
    
    const lists = test_list.map(list =>
      <ShoppingList key={list.id} storeName={list.name} total={list.total} numberOfItems={list.numberOfItems} />
    );
    return (
        lists
    )
}

export default UserLists