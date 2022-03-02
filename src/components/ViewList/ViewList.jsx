import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';
import ShoppingListItems from "../ShoppingListItem/ShoppingListItems"

export default function ViewList(props) {
    
    const location = useLocation();
    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios({
            method: "GET",
            url: location.pathname,
            withCredentials: true
        })
        .then((res) => {
            setListItems(res.data.list.items);
            props.setLocation(res.data.list.listName || "Untitled List")
            setLoading(false)
            setTotal(res.data.list.listTotal)
        })
    }, [])
    
    return (
        <div>
            { (!loading) ? (
                <div>
                    Items
                    <table>
                        <tbody>
                        {listItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox" value={item.completed}></input></td>
                                    <td>{item.name}</td>
                                    <td>{item.itemPrice}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    Total: {total}
                </div> )
                : (
                    <div>
                        <ReactLoading type="bars" color="#808080" />
                    </div>
                ) 
            }
            
        </div>
    )
}