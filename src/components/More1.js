import React from 'react'

const More1 = () => {
  return (
    <>
       <div className='body'>
    <form>

    <h3 className='header'>Application for Driving Licenses(DL) Renewal</h3>
     <div className='P3'>
     <label for="name">*Driving License No</label>
        <input type='text/number' className='driving' placeholder='' required/> 
        <label for="name" >*Date of Birth</label>
       <input type='date'  placeholder='duplicate'  className='driving' required/>
        <button className='getdetails'>Get Details</button> <br/><br/><br/>
     *state <select className='dropdown' required >
     <option value="KA01"></option>
    <option value="Karnataka">Karnataka</option>    
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
  </select>

* RTO Office <select className='RTO' required>
    
  <option value="KA01"></option>
  <option value="KA01">KA01 -Bangalore Central</option>
  <option value="KA02">KA02 -  Bangalore West</option>
  <option value="KA03">KA03 -  Bangalore East</option>
  <option value="KA04">KA04 -  Bangalore North</option>
  <option value="KA05">KA05 -  Bangalore South</option>
  <option value="KA06">KA06 -  Tumkur</option>
  <option value="KA07">KA07 -  Kolar</option>
  <option value="KA08">KA08 -  Mysore</option>
  <option value="KA09">KA09 - Mandya</option>
  <option value="KA10">KA10 -  Hassan</option>
  <option value="KA11">KA11 - Shimoga</option>
  <option value="KA12">KA12 - Chitradurga</option>
  <option value="KA13">KA13 -  Davangere</option>
  <option value="KA14">KA14 -  Chikmagalur</option>
  <option value="KA15">KA15 -  Kodagu</option>
  <option value="KA16">KA16 -  Udupi</option>
  <option value="KA17">KA17 -  UKannada</option>
  <option value="KA18">KA18 -  Karwar</option>
  <option value="KA19">KA19 -  Sirsi</option>
  <option value="KA20">KA20 -  Gulbarga</option>
  <option value="KA21">KA21 -  Bidar</option>
  <option value="KA22">KA22 -  Raichur</option>
  <option value="KA23">KA23 -  Bellary</option>
  <option value="KA24">KA24 -  Koppal</option>
  <option value="KA25">KA25 -  Gadag</option>
  <option value="KA26">KA26 -  Haveri</option>
  <option value="KA27">KA27 - Dharwad</option>
  <option value="KA28">KA28 -  Belgaum</option>
  <option value="KA29">KA29 -  Bagalkot</option>
  <option value="KA30">KA30 -  Bijapur</option>
  <option value="KA31">KA31 -  Chikkodi</option>
  <option value="KA32">KA32 -  Gadag Rural</option>
  <option value="KA33">KA33 - Chamrajnagar</option>
  <option value="KA34">KA34 -  Ramnagar</option>
  <option value="KA35">KA35 -  Chikballapur</option>
  <option value="KA36">KA36 -  Kolar Gold Fields</option>
  <option value="KA37">KA37 -  Shidlaghatta</option>
  <option value="KA38">KA38 - Gauribidanur</option>
  <option value="KA39">KA39 -  Yelahanka</option>
  <option value="KA40">KA40 - Nelamangala</option>
  <option value="KA41">KA41 -  Bangalore Rural</option>
  <option value="KA42">KA42 -  Hoskote</option>
  <option value="KA43">KA43 - Anekal</option>
  <option value="KA44">KA44 -  Devanahalli</option>
  <option value="KA45">KA45 -  Magadi</option>
  <option value="KA46">KA46 -  Madhugiri</option>
  <option value="KA47">KA47 -  Pavagada</option>

</select>

  Pincode <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" required className='dropdown  '></input>
</div> 
<div className='P4'><h4>Personal Details :</h4>
 <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name" required className='P5'/>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required className='P5'/>
  <label for="Photo">Photo:</label>
  <input type='file' className='P6' required></input><br/><br/>
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className='P7'/>
  <label for="DOB">DOB:</label>
  <input type='Date' className='P7' required></input>
  <label for="name">Place of Birth:</label>
  <input type="text" className="P7" name="name" placeholder="" required/>
  <br/><br/>
 
  <label for="qualification">Select Qualification:</label>
<select  className="P7" name="qualification" required>
  <option value="high_school">High School</option>
  <option value="phd">PUC</option>
  <option value="phd">Diploma</option>
  <option value="bachelors_degree">Bachelor's Degree</option>
  <option value="masters_degree">Master's Degree</option>
  <option value="phd">Ph.D.</option>
  <option value="high_school">B.E</option>
  <option value="high_school">Bsc</option>
</select><br/><br/><br/><br/>
</div>
<div className='adress'><h4>Address  :</h4>
<label for="street">Street Address:</label>
  <input type="text" id="street" name="street" required className='address'/>

  <label for="city">City:</label>
  <input type="text" id="city" name="city" required className='address'/>
  
  <label for="city">Taluk:</label>
  <input type="text" id="city" name="city" required className='address'/><br/><br/>

  <label for="state">District:</label>
  <input type="text" id="state" name="state" required className='address'/>
  <label for="state">State:</label>
  <input type="text" id="state" name="state" required className='address'/>
  <label for="postal_code">Postal Code:</label>
  <input type="text" id="postal_code" name="postal_code" required className='address'/><br/><br/>

  <label for="country">Country:</label>
  <input type="text" id="country" name="country" required className='address'/>
  
<br/><br/><br/><br/>
</div>
<div className='declaration'><h4>Declaration</h4>
<p>Fill-Up Form1 details before submiting the application</p>
<p>1.I am willing to donate my organs,in case of accident death?<input type ='radio'/>Yes<input type ='radio'/>No </p> 
<p>I here by declare that to the best of my knowledge and the belief particular given above are true <input type="checkbox"/></p>
</div>
  </form>
  <br/><br/>
<div className='get'>
  <button className='submit'>Submit</button>
  <button className='submit'>Refresh</button>
  <button className='submit'>Cancel</button>
</div>
</div>
  <br/><br/>
  
  </>
  )
}


export default More1