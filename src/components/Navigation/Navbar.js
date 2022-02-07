import React from 'react';
import NavItem from './NavItem';
import HamburgerMenu from './Hamburger';
import NavLabel from './NavLabel'
import './navbar.css'

function Navigation() {
    return(
        <div>
            <ul className='navbar'>
                <NavItem label="LISTS" />
                <NavItem label="STORES" />
                <div className="align-right">
                    <NavItem icon="new-list"/>
                    <NavItem icon="profile" />
                </div>
            </ul>
            <div className="hamburger-menu">
                <HamburgerMenu />
                <NavLabel label="Your Lists" />
                <div className="align-right">
                    <NavItem icon="new-list"/>
                </div>
            </div>
        </div>
    )
}

export default Navigation