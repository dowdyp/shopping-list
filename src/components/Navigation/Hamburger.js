import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './hamburger.css';

function HamburgerMenu(props) {
    return (
    <li className="NavItem">
        <a href="#"><GiHamburgerMenu classname="Hamburger" /></a>
    </li>
    )
}

export default HamburgerMenu