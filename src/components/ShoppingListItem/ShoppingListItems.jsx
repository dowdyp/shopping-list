import React from "react";
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingListItems({listItems}) {
    const itemList = listItems.map(item => 
        <ShoppingListItem key={item.key} title={item.name} total={item.total} />
        );

    return (
        itemList
    )
}