import React from 'react';
import { Link } from 'react-router-dom';
import './shoppinglist.css';

function List(props) {

    const { storeName, numberOfItems, total, id } = props

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
                <Link to={`list/${id}`}>
                    <button className="ViewListButton">View List</button>
                </Link>
            </div>
        </div>
    )
}

export default List