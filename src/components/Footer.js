import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer>
       <>
  <ul type='none' className='footer'><li className='list1' >
        <Link to ='/terms' className='terms'>  Privacy Policy</Link>
      
         </li>
         </ul>
         <p className='My'>&copy; 2023 My Website</p>
         </>

     
      
    </footer>
  );
}

export default Footer;