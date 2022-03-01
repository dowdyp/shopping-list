import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShoppingListItem from "./ShoppingListItem";
import axios from "axios";

export default function ShoppingListItems({listItems}) {

    const itemList = listItems.map((item, index) => 
        <ShoppingListItem key={index} title={item.name} total={item.itemPrice} />
        );

    return (
        itemList
    )
}