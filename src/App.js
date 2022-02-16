import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserLists from './components/ContentFeed/UserLists';
import ListCreator from './components/ListCreator/ListCreator';
import './app.css';

function App(props) {

    const userLists = [
        {id: 1, name: "Home Depot", total: 127.40, numberOfItems: 3},
        {id: 2, name: "Microcenter", total: 2938.49, numberOfItems: 2},
        {id: 3, name: 'Sam\'s Club', total: 144.44, numberOfItems: 14}
    ]

    const [location, setLocation] = useState("Your Lists")
    const [lists, setLists] = useState(userLists)
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;