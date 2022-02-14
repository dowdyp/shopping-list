import React from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import { List, BrowserRouter } from 'react-router-dom';
import './content.css'

function Content(props) {
    const test_list = [
        {name: "Home Depot", total: 127.40, numberOfItems: 3},
        {name: "Microcenter", total: 2938.49, numberOfItems: 2},
        {name: 'Sam\'s Club', total: 144.44, numberOfItems: 14}
    ]
    const lists = test_list.map(list =>
      <ShoppingList storeName={list.name} total={list.total} numberOfItems={list.numberOfItems} />
    );
    return (
        <div className="ContentContainer">
            {lists}
        </div>
    )
}

export default Content