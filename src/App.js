import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserLists from './components/ContentFeed/UserLists';
import ListCreator from './components/ListCreator/ListCreator';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './app.css';

function App(props) {

    const [location, setLocation] = useState("Your Lists")
    const [lists, setLists] = useState([])
    const [key, setKey] = useState(4)

    const addListToUser = (name, list) => {
        setLists(lists => [...lists, {
            id: key,
            name: name,
            title: list.title,
            total: 200,
            numberOfItems: list.length
        }])
        setKey(key + 1)
    }

    useEffect(() => {
        const data = getLists()
        .then(data => {
            setLists(data);
        })
    }, [])

    const getLists = async () => {
        const response = await fetch("http://localhost:3001/lists");
        const data = await response.json();

        return data
    }

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
                        <Route path="/" element={<UserLists setLocation={setLocation} userLists={lists} />}/>
                        <Route path="/new-list" element={<ListCreator setLocation={setLocation} addListToUser={addListToUser} />} />
                        <Route path="/login" element={<Login setLocation={setLocation} setLists={setLists} /> } />
                        <Route path="/register" element={<Register setLocation={setLocation} /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;