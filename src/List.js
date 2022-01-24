import React from 'react';
import './List.css';

function List(props) {
    return(
        <div className="ListContainer">
            <div className="StoreName">
                {props.storeName}
            </div>
            <div className="NumberOfItems">
                {props.numberOfItems}
            </div>
            <div className="Total">
                ${props.total.toFixed(2)}
            </div>
            <div className="ButtonContainer">
                <button className="ViewListButton">View List</button>
            </div>
        </div>
    )
}

export default List