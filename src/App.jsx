import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import './index.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/feature" element={<Home />} />
          <Route path="/service" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;