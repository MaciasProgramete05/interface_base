// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import './styles/App.css'; 

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;