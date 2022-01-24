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
                    <div className="AlignRight">
                        <NavItem icon="new-list"/>
                        <NavItem icon="profile" />
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navigation