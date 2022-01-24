import React from 'react';
import NavItem from './NavItem';
import './Navbar.css'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul className='Navbar'>
                    <NavItem label="LISTS" />
                    <NavItem label="STORES" />
                    <NavItem label="PROFILE" />
                </ul>
            </div>


        )
    }
}

export default Navigation