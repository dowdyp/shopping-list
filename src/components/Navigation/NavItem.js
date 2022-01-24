import React from 'react';
import './NavItem.css'
import { AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai';

function NavItem(props) {
    const icons = {
        'profile': <AiOutlineUser/>,
        'new-list': <AiOutlinePlusCircle />
    }

    return props.icon ? (
            <a>
                <li className="NavItem">
                    {icons[props.icon]}
                </li>
            </a>
        ) : (
        <a>
            <li className="NavItem">
                {props.label}
            </li>
        </a>
    )
}

export default NavItem