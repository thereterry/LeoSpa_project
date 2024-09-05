import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home'
import Reserve from './pages/Reserve';
import AdminPage from './layout/ADMIN/AdminPage';
import Navbar from './layout/Navbar';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login'
import Service from '../src/components/pages/Service'
import AdminPanel from './layout/ADMIN/AdminPanel'
import './index.css';





const App = () => {
  return (
 
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        
          {/* Home Layout Routes */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/feature" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Route>

        {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/feature" element={<Home />} /> */}
          
          <Route path="/service" element={<Service />} />
        
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;