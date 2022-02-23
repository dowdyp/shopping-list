import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import NavLabel from './NavLabel';
import axios from 'axios';
import './navigation.css';



function Navigation(props) {

    const { location } = props
    const navigate = useNavigate()

    function handleLogout() {
        axios({
            method: "POST",
            url: "/logout",
        }).then((res) => {
            console.log(res.data);
            props.setIsUserAuthenticated(false)
            navigate("/", {replace: true})
        })
    }

    return(
        <div>
            <ul className='navbar'>
                <NavLink to="/">
                    <NavItem label="LISTS" />
                </NavLink>
                <NavItem label="STORES" />
                <div className="align-right">
                    <Link to="/new-list"><NavItem icon="new-list-icon"/></Link>
                    <div className="profile-hover">
                    <NavItem icon="profile-icon" />
                        <div className="dropdown-menu">
                            <Link to="/profile"><li>Profile</li></Link>
                            <Link to="/settings"><li>Settings</li></Link>
                            <hr />
                            {props.isAuthenticated ? 
                            <button onClick={handleLogout}><li>Log Out</li></button>
                            :
                            <Link to="/login"><li>Log In</li></Link>
                            }
                        </div>
                    </div>
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