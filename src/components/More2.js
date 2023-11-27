import React from 'react'

const More2 = () => {
  return (
   
    <form>
    <h3 className='header'>Application for Duplicate Driving Licenses(DL) </h3>
    <div className='Renewal'>
        <h4> Duplicate Driving Licenses(DL):</h4>
    <label for="name">*Driving License No</label>
       <input type='text/number' className='P5' placeholder='' required/> 
       <label for="name" >*Date of Birth</label>
       <input type='date'  placeholder='duplicate'  className='P5' required/> 
       
        <button className='getdetails'>Get Details</button><br/><br/><br/><br/>
        <div className='get'>
        <button className='getdetails'>Renew DL</button>
        <button className='getdetails'>Cancel</button>

        </div>
        
       </div><br/><br/><br/><br/>
       </form>
 
  )

}

export default More2
