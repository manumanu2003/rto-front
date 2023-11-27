import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer>
       <>
      
  <p className='text'><b><u>TermsandPolicies</u>  <u>About</u>  <u> Needhelp</u> </b></p>
  <ul type='none' className='footer'><li className='list1' >
        <Link to ='/terms' className='terms'>  Privacy Policy</Link>
        <Link to ='About us' className='terms'>  About us</Link>
        <Link to ='Contact us' className='terms'>  Contact us</Link>
         </li>
         </ul>
         <p className='My'>&copy; 2023 My Website</p>
         </>

     
      
    </footer>
  );
}

export default Footer;