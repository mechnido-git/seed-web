import React from 'react'
import './info.css';
import icon from "../../images/edit-icon.png";
export default function UserProfile({ name ,gender, college , dep , year, dob , email, mobile, setPage }) {
  return (

    // <div className='form-data'>
    //   <div className='h2'><h2>My Profile</h2></div>
    //  <div className='data'>
    //   <div className='labels'><p>Name</p></div>:
    //   <div className='values'><p>{name}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Email</p></div>:
    //   <div className='values'><p>{email}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Gender</p></div><span>:</span>
    //   <div className='values'><p>{gender}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Date Of Birth</p></div>:
    //   <div className='values'><p>{dob}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>College Name</p></div>:
    //   <div className='values'><p>{college}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Year</p></div>:
    //   <div className='values'><p>{year}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Department</p></div>:
    //   <div className='values'><p>{dep}</p></div>
    //  </div>
    //  <div className='data'>
    //   <div className='labels'><p>Mobile</p></div>:
    //   <div className='values'><p>{mobile}</p></div>
    //  </div>
       
    // <button onClick={()=>{setPage(true)}}>Edit</button>
   

      
     
    // </div>
<div className='accounts-page'>
<div className='h2'><div><h2>My Profile</h2></div>  </div>
  <div className='form-container'>
    <div className='form-data'>
      <div>
      <div className='head-data'><h3>Name</h3></div>
      <div className='data'><p>{name}</p></div>
      </div>

      <div>
      <div className='head-data'><h3>Gender</h3></div>
      <div className='data'><p>{gender}</p></div>
      </div>

      <div>
      <div className='head-data'><h3>Mobile</h3></div>
      <div className='data'><p>{mobile}</p></div>
      </div>

      <div>
      <div className='head-data'><h3>Date Of Birth</h3></div>
      <div className='data'><p>{dob}</p></div>
      </div>
      
    </div>
    <div className='form-data'>
    <div>
      <div className='head-data'><h3>Email</h3></div>
      <div className='data'><p>{email}</p></div>
      </div>
      <div>
      <div className='head-data'><h3>College</h3></div>
      <div className='data'><p>{college}</p></div>
      </div>
      <div>
      <div className='head-data'><h3>Department</h3></div>
      <div className='data'><p>{dep}</p></div>
      </div>
      <div>
      <div className='head-data'><h3>Year</h3></div>
      <div className='data'><p>{year}</p></div>
      </div>
    
    
    </div>
  </div>
  <button onClick={()=>{setPage(true)}}>Edit</button>
</div>


  )
}
