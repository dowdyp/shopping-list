import React from "react";

export default function ShoppingListItem(props) {
    return (
        <div>
            {props.title}, {props.total}
        </div>
    )
}