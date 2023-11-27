import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar=()=>{
    return (
        <>
    <nav className="NavbarItems">
        
                      <img src="https://parivahan.gov.in/parivahan//sites/default/files/logo-parivahan-sewa-en.png" class="emblem-resize" alt="National Emblem Logo"/>
             <div class="inline-section fix-width">
                <div class="govt-india">
                    Government of India<br/>
                    Ministry of Road Transport &amp; Highway </div>
            </div>
            

        <ul  type='none' className="nav-menu">
      <li>
      <Link to="/" className='nav-links'><FaHome />Home</Link>
      <Link to="/About us" className='nav-links'>About us</Link>
      <Link to ='Contact us' className='nav-links'>  Contact us</Link>
      <input type='text' placeholder='search'/>
      <button type='onclick'><FaSearch /></button>
      
       </li>
        </ul>
        </nav>
        </> 
    )
}

export default Navbar;