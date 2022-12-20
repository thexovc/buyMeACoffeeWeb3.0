import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import NavbarUser from './components/NavbarUser';
import Search from './components/Search';
import { BContext } from './context/BContext';


function App() {
  const { open, setOpen } = useContext(BContext)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (window.ethereum) {
      setTrigger(true)
    } else {
      setTrigger(false)
    }

    console.log("trigger", trigger)
  })



  return (
    <>
      {trigger ? <NavbarUser /> : <Navbar />}
      <div onClick={() => setOpen(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Main />} />
          <Route path="/creator/:addr" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

}

export default App;