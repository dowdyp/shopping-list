import React from 'react';
import './navitem.css'

function NavLabel(props) {
    return (
        <li className="NavLabel">
            {props.label}
        </li>
    )
}

export default NavLabel