import React from 'react';
import Navigation from './Navbar';
import Content from './Content';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Parker", loc: ""}
    }

    render() {
        return(
            <div className="appContainer">
                <Navigation />
                <Content />
            </div>
        )
    }
}

export default App;