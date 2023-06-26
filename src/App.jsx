import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from "./Components/Header";
import { Watchlist } from './Components/Watchlist';
import { Watched } from './Components/Watched';
import {Home} from "./Components/Home";
import './Components/lib/font-awesome/css/all.min.css';
function App(){
    return (
        <Router>
            <Header/>

            <Routes>
                <Route element = {Home} path="/">    
                </Route>
                <Route element = {Watched} path="/watched">
                </Route>
                <Route element= {Watchlist} path="/watchlist">
                </Route>
            </Routes>
        </Router>
    )
}


export default App;