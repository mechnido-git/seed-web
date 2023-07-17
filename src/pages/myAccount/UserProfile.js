import React from 'react'
import './info.css';
export default function UserProfile({ name ,gender, college , dep , year, dob , email, mobile, setPage }) {
  return (

    <div className='form-data'>
      <div className='h2'><h2>My Profile</h2></div>
     <div className='data'>
      <div className='labels'><p>Name</p></div>:
      <div className='values'><p>{name}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Email</p></div>:
      <div className='values'><p>{email}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Gender</p></div><span>:</span>
      <div className='values'><p>{gender}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Date Of Birth</p></div>:
      <div className='values'><p>{dob}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>College Name</p></div>:
      <div className='values'><p>{college}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Year</p></div>:
      <div className='values'><p>{year}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Department</p></div>:
      <div className='values'><p>{dep}</p></div>
     </div>
     <div className='data'>
      <div className='labels'><p>Mobile</p></div>:
      <div className='values'><p>{mobile}</p></div>
     </div>
       
    <button onClick={()=>{setPage(true)}}>Edit</button>
   

      
     
    </div>
  )
}
