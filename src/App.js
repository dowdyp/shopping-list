import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navbar';
import Content from './components/ContentFeed/Content';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Parker", loc: ""}
    }

    render() {
        return(
            <div className="AppContainer">
                <Navigation />
                <Content />
            </div>
        )
    }
}

export default App;