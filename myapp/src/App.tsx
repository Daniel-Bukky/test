import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Counter } from './Components/Counter';
import { InfoCard } from './Components/InfoCard';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Navbar } from './pages/Navbar/Navbar';
import { Team } from './pages/Team/Team';
import { IInfoCard } from './types';

function App() {

    return (
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </div>
            </Router>    
    );

}

    


export default App;
