import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navbar';
import Content from './components/ContentFeed/Content';
import ListCreator from './components/ListCreator/ListCreator';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Parker", loc: ""}
    }

    render() {
        return(
            <div className="AppContainer">
                <BrowserRouter>
                <Navigation />
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/new-list" element={<ListCreator />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;