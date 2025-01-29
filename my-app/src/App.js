import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './Header';
import Home from './componts/Home';
import About from './componts//About';
import Contact from './componts//Contact';
import Signup from './componts/Sign-up';
import './App.css';

const App=()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
