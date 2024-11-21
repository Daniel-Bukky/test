import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Counter } from './Components/Counter';
import { InfoCard } from './Components/InfoCard';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Navbar } from './pages/Navbar/Navbar';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Team } from './pages/Team/Team';
import { Routing } from './Routing/Routing';
import { IInfoCard } from './types';

function App() {

    return (
        <div> 
            <Router>
                <Navbar />
                <Routing/>
            </Router>
        </div>
    );

}




export default App;
