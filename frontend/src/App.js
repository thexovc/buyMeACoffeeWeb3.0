import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );

}

export default App;