import React from 'react';
import './NavItem.css'

function NavItem(props) {
    return  (
        <a href>
            <li className="NavItem">
                {props.label}
            </li>
        </a>

    )
}

export default NavItem