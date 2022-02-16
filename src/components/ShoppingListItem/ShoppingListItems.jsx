import React from "react";
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingListItems({items}) {
    const itemList = items.map(item => 
        <ShoppingListItem key={item.key} title={item.title} price={item.price} />
        );

    return (
        itemList
    )
}