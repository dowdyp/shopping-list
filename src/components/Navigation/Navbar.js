import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import HamburgerMenu from './Hamburger';
import NavLabel from './NavLabel'
import './navbar.css'

function Navigation(props) {
    return(
        <div>
            <ul className='navbar'>
                <NavItem label="LISTS" />
                <NavItem label="STORES" />
                <div className="align-right">
                    <Link to="/new-list"><NavItem icon="new-list-icon"/></Link>
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