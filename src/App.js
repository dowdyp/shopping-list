import React from 'react';
import Navigation from './components/Navigation/Navbar';
import Content from './components/ContentFeed/Content';


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