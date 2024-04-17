import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation';
import Home from './pages/home'; // Correct import path to Home component
import About from './pages/about';
import Chatbot from './pages/chatbot';
import Project from './pages/project';


function App() {
  return (
    <Router basename="/reactapp">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/project" element={<Project />} />
        
      </Routes>
    </Router>
  );
}

export default App;
