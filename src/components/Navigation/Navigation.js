import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import NavLabel from './NavLabel'
import './navigation.css'



function Navigation(props) {

    const { location } = props

    return(
        <div>
            <ul className='navbar'>
                <NavLink to="/">
                    <NavItem label="LISTS" />
                </NavLink>
                <NavItem label="STORES" />
                <div className="align-right">
                    <Link to="/new-list"><NavItem icon="new-list-icon"/></Link>
                    <Link to="/login"><NavItem icon="profile-icon" /></Link>
                </div>
            </ul>
            <div className="hamburger-menu">

                <button className="button-nostyle">
                    <div className="NavItem">
                        <GiHamburgerMenu />
                    </div>
                </button>

                <NavLabel label={location} />
                {location === "Your Lists" ? 
                    <div className="align-right">
                        <Link to="/new-list" ><NavItem icon="new-list-icon"/></Link>
                    </div>
                    :
                    null
                } 

            </div>
        </div>
    )
}

export default Navigation