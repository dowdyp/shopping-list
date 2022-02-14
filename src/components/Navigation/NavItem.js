import React from 'react';
import './navitem.css'
import { AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai';

function NavItem(props) {
    const icons = {
        'profile-icon': <AiOutlineUser/>,
        'new-list-icon': <AiOutlinePlusCircle />
    }

    return props.icon ? (
        <li className="NavItem">
            <a href="#">{icons[props.icon]}</a>
        </li>
    ) : (
        <li className="NavItem">
            <a href="#">{props.label}</a>
        </li>
    )
}

export default NavItem