import React from 'react'
import './info.css';
import icon from "../../images/edit-icon.png";
import { CardBuilder } from '../courses/CoursesHome';
import { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from '../../components/Spinner';

export default function UserProfile({ name ,gender, college , dep , year, dob , email, mobile, setPage }) {

  const {filter, setFilter} =  useContext(StoreContext);
const [loading, setLoading] = useState(true);
const [recommended, setRecommended] = useState([]);
const navigate = useNavigate();
const [enrolledCourses, setEnrolledCourses] = useState([]);
const [enrolledEvents, setEnrolledEvents] = useState([]);
const [user, setUser] = useState(null);

const fetch = async (user) => {

  const eventQ = query(
    collection(db, "events"),
    where("enrolled", "array-contains", user.uid)
  );

  const snap2 = await getDocs(eventQ)
  const list2 = snap2.docs.map((list) => {
    return {
      ...list.data(),
      id: list.id
    }
  })
  setEnrolledEvents(list2)

  const q = query(
    collection(db, "courses"),
    where("enrolled_arr", "array-contains", user.uid)
  );
  const snaps = await getDocs(q)
  const lists = snaps.docs.map((list) => {
    return {
      ...list.data(),
      id: list.id
    }
  })
  console.log(lists.length + "=>l");
  setEnrolledCourses(lists)
  console.log(lists);
  setLoading(false)
}

// const getInvoice = (course) => {
//   let invoice = null;
//   course.enrolled.forEach(item=>{
//     if(item.userId === user.uid){
//       invoice = item.invoice
//     }
//   })
//   return invoice
// }

const getCours = (index) => {
  console.log('hi');
  navigate(`/menu/courses/details/${index}`)
}

useEffect(() => {
  onAuthStateChanged(auth, user => {
    setUser(user)
    fetch(user)
  })
}, [])


  return (
    <>
    {loading? <Spinner other={'height'} normal={true} loading={loading} />:
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

  }

{/*------------------------Courses enrolled----------------------------------------------  */}
<div className='accounts-page'>
<div className='h2'><div><h2>My Courses</h2></div>  </div>               
<div className='enroll-card-container'>
{false ? <Spinner other={'height'} normal={true} loading={loading} /> : <>
        {enrolledCourses.length !== 0 || enrolledEvents.length !== 0 ? <>
          {/* {enrolledEvents.length !== 0 && enrolledEvents.map((item, key) => {
            return <div style={{ cursor: 'pointer' }} className="card" key={key} >
              <h4>{item.name}</h4>
          
            </div>
          })} */}
          {/* {enrolledCourses.length !== 0 && enrolledCourses.map((item) => { */}
          
            { enrolledCourses.length !== 0 &&
             <>
              <CardBuilder
                    loading={loading}
                    arr={enrolledCourses}
                    viewDetails={getCours}
                  />
             </>
          }
        </> : <>
        <div className='request-enroll'>
          <p>You are not enrolled to any courses, Please Enroll</p>
          <div className="btns">
            <button onClick={() => { navigate("/menu/courses"); window.location.reload() }} >Courses</button>
            <button onClick={() => { navigate("/menu/events"); window.location.reload() }}>Events</button>
          </div>
          </div>
        </>}
      </>}
</div>
</div>
{/* --------------------------------------------------------------------------------------------------------------------- */}
<div className='accounts-page'>
<div className='h2'><div><h2>My Events</h2></div>  </div>               
<div className='enroll-card-container'>
{false ? <Spinner other={'height'} normal={true} loading={loading} /> : <>
        { enrolledEvents.length !== 0 ? <>
          {/* {enrolledEvents.length !== 0 && enrolledEvents.map((item, key) => {
            return <div style={{ cursor: 'pointer' }} className="card" key={key} >
              <h4>{item.name}</h4>
          
            </div>
          })} */}
          {/* {enrolledCourses.length !== 0 && enrolledCourses.map((item) => { */}
          
            { enrolledEvents.length !== 0 &&
             <>
              <CardBuilder
                    loading={loading}
                    arr={enrolledEvents}
                    viewDetails={getCours}
                  />
             </>
          }
        </> : <>
          <div className='request-enroll'>
          <p>You are not enrolled to any events, Please Enroll</p>
          <div className="btns">
            <button onClick={() => { navigate("/menu/courses"); window.location.reload() }} >Courses</button>
            <button onClick={() => { navigate("/menu/events"); window.location.reload() }}>Events</button>
          </div>
          </div>

        </>}
      </>}
</div>
</div>

</>
        
        

  )
}
