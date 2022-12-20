import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { BContext } from './context/BContext';


function App() {
  const { open, setOpen } = useContext(BContext)


  return (
    <>
      <Navbar />
      <div onClick={() => setOpen(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

}

export default App;