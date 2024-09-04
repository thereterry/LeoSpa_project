// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from './Header'
// // import Footer from './Footer'



// const Layout = () => {
//     return (

//         <section>

//             <Header />

//             <main>
//                 <Outlet />
//             </main>

//             {/* <Footer /> */}
//         </section>
//     )
// }

// export default 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import AdminPage from './layout/ADMIN/AdminPage';
import Navbar from './layout/Navbar';
import Layout from './layout/Layout'; 
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/feature" element={<Home />} />
            <Route path="/service" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
