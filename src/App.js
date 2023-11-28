import './App.css';
import React from 'react';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import More from './components/More';
import More1 from './components/More1';
import More2 from './components/More2';
function App() {
  return (
    
    <>

    <Navbar/>
      <div>
    <Routes>      
      <Route path="/"  element={<Home/>}/>   
      <Route path="/About us"  element={<About/>}/>
      <Route path="/terms"  element={<Privacy/>}/>
      <Route path="/Contact us"  element={<Contact/>}/>
      <Route path="/more"  element={<More/>}/>
      <Route path="/more1"  element={<More1/>}/>
      <Route path="/more2"  element={<More2/>}/>
    </Routes>
    </div>
    <Footer/>
   
    </>

  );
}

export default App;

