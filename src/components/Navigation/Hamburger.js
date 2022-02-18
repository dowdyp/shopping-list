import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './hamburger.css';

function HamburgerMenu(props) {
    return (
        <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
                Profile
            </li>
            <li className="hamburger-menu-item">
                Settings
            </li>
        </ul>
    )
}

export default HamburgerMenu