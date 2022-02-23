import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserLists from './components/ContentFeed/UserLists';
import ListCreator from './components/ListCreator/ListCreator';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import './app.css';
import axios from 'axios';

function App(props) {

    const [location, setLocation] = useState("Your Lists")
    const [lists, setLists] = useState([])
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

    useEffect(() => {
        if (!isUserAuthenticated) {
            axios("/is-authenticated", {
                method: "GET", 
                withCredentials: true
            })
            .then((res) => {
                if (res.data.status) setIsUserAuthenticated(res.data.status)
                else {
                    setIsUserAuthenticated(false)
                }
            })
            .catch((e) => {
                return e
            });
        }
    });

    return(
        <BrowserRouter>
            <div className="AppContainer">
                {/* NAVBAR */}
                <Navigation location={location} isAuthenticated={isUserAuthenticated} setIsUserAuthenticated={setIsUserAuthenticated}/>
                {/* MAIN APP FUNCTIONALITY */}
                <div className="ContentContainer">
                    <div className="main-header">
                        {location}
                    </div>
                    <Routes>
                        <Route path="/" element={<UserLists setLocation={setLocation} isAuthenticated={isUserAuthenticated} />}/>
                        <Route path="/new-list" element={<ListCreator setLocation={setLocation} />} />
                        <Route path="/login" element={<Login setLocation={setLocation} setLists={setLists} setIsUserAuthenticated={setIsUserAuthenticated}/> } />
                        <Route path="/register" element={<Register setLocation={setLocation} /> } />
                        <Route path="/profile" element={<Profile setLocation={setLocation} isAuthenticated={isUserAuthenticated} /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;