import React from 'react';
import './shoppinglist.css';

function List(props) {

    const { storeName, numberOfItems, total } = props

    return(
        <div className="ListContainer">
            <div className="StoreName">
                {storeName}
            </div>
            <div className="NumberOfItems">
                {numberOfItems} Items
            </div>
            <div className="Total">
                ${total.toFixed(2)}
            </div>
            <div className="ButtonContainer">
                <button className="ViewListButton">View List</button>
            </div>
        </div>
    )
}

export default List