import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { StoreContext } from '../../store/StoreContext'
import img from "../../images/courses.jpg"
import "./details.css"

function CourseDetails() {

    const {index} = useParams()

    const {courseList} = useContext(StoreContext)

    console.log(courseList[index]);
    const [data, setData] = useState(courseList[index])

    const showSubs = (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle('show')
    }
        
  return (
    <div className='course-details'>
        <h1>{data.name}</h1>
        <img src={img} alt="" />
        <div className="details">
            <div className="description">
            <h2>Description</h2>
            {data.description_L.map((item, i)=><p key={i}>{item}</p>)}
            </div>
            <div className="duration">
                <h2>Duration</h2>
                {data.duration.map((item, i)=><h3 key={i}>{item}</h3>)}
            </div>
        </div>
        <div className="schedule">
            <h2>Schedule</h2>
            {data.schedule.map((item, i)=><div key={i} className='main'>
                <h3>{item.name}</h3>
                <ol>
                {item.topics.map((item, i)=><li key={i} className='topic'>
                   <h4 onClick={showSubs} >{item.name}</h4>
                   <ul>
                   {item.SUB.map((item, i)=><li key={i}>{item}</li>)}
                   </ul>
                </li>)}
                </ol>
            </div>)}
        </div>

    </div>
  )
}

export default CourseDetails