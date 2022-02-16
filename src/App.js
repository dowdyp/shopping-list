import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserLists from './components/ContentFeed/UserLists';
import ListCreator from './components/ListCreator/ListCreator';
import './app.css';

function App(props) {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("Your Lists")

    return(
        <BrowserRouter>
            <div className="AppContainer">
                {/* NAVBAR */}
                <Navigation location={location}/>
                {/* MAIN APP FUNCTIONALITY */}
                <div className="ContentContainer">
                    <div className="main-header">
                        {location}
                    </div>
                    <Routes>
                        <Route path="/" element={<UserLists setLocation={setLocation} />}/>
                        <Route path="/new-list" element={<ListCreator setLocation={setLocation} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;