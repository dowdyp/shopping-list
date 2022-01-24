import React from 'react';

class ListContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul>{ this.entries }</ul>
            </div>
        ); 
    }
}

export default ListContainer;