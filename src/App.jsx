import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPage from './layout/ADMIN/AdminPage';
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
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;