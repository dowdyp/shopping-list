import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserLists from './components/ContentFeed/UserLists';
import ListCreator from './components/ListCreator/ListCreator';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import ViewList from './components/ViewList/ViewList';
import './app.css';
import axios from 'axios';

function App(props) {

    const [location, setLocation] = useState("Your Lists")
    const [isUserAuthenticated, setIsUserAuthenticated] = useState()

    useEffect(async () => {
        if (!isUserAuthenticated) {
            await axios("/is-authenticated", {
                method: "GET", 
                withCredentials: true
            })
            .then((res) => {
                if (res.data.success) setIsUserAuthenticated(true)
                else {
                    setIsUserAuthenticated(false)
                }
            })
            .catch((e) => {
                return e
            });
        }
    }, []);

    return(
        <BrowserRouter>
            <div className="AppContainer">
                {/* NAVBAR */}
                <Navigation location={location} isUserAuthenticated={isUserAuthenticated} setIsUserAuthenticated={setIsUserAuthenticated} />
                {/* MAIN APP FUNCTIONALITY */}
                <div className="ContentContainer">
                    <div className="main-header">
                        {location}
                    </div>
                    <Routes>
                        <Route path="/" element={<UserLists setLocation={setLocation} isAuthenticated={isUserAuthenticated} />}/>
                        <Route path="/new-list" element={<ListCreator setLocation={setLocation} />} />
                        <Route path="/login" element={<Login setLocation={setLocation} setIsUserAuthenticated={setIsUserAuthenticated}/> } />
                        <Route path="/register" element={<Register setLocation={setLocation} /> } />
                        <Route path="/profile" element={<Profile setLocation={setLocation} isAuthenticated={isUserAuthenticated} /> } />
                        <Route path="/list/:id" element={<ViewList isAuthenticated={isUserAuthenticated} setLocation={setLocation} />}  />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;