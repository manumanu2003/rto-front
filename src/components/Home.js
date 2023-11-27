import React from 'react'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <>
    <section className="head1">License Related Services</section>
<p className='P1'>Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online <br/>test for learner's licence, etc.</p>
    <div className="services">
    <div className="card"> 
    <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-learners-license-services.png" alt="Learners/Driving License" className='image1'/>
    <h2>Drivers/ Learners License</h2>
    <p>License registration on your fingertips</p>
    <Link to="/more" className='nav-links'><button className='more'>more</button></Link>
    </div>
<div className="card">
<img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-license.png" alt="Online Services" className='image1'/>
    <h2>Apply for DL Renewal</h2>
    <p>One click for DL Renewal <br/><br/></p>
    <Link to="/more1" className='nav-links'><button  className='more' >more</button></Link>
</div>

    <div className="card">
    <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-licence-registration-details.png" alt="License and Registration Details"className='image1'/>
   <h2>Apply for Duplicate DL</h2>
    <p>One click for Duplicate DL  <br/><br/></p>
    <Link to="/more2" className='nav-links'><button  className='more'>more</button></Link>
</div></div>


</>
  )         
}

export default Home
