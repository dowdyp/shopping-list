import React from 'react';
import './navitem.css'
import { AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai';

function NavItem(props) {
    const icons = {
        'profile-icon': <AiOutlineUser />,
        'new-list-icon': <AiOutlinePlusCircle />
    }

    return props.icon ? (
        <li className="NavItem">
            {icons[props.icon]}
        </li>
    ) : (
        <li className="NavItem">
            {props.label}
        </li>
    )
}

export default NavItem