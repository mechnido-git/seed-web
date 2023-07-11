import React from 'react'
import "./schedule.css"
export default function ScheduleItem(props) {
  return (
    <>
      <div className="schdat">
        <p className='sch'>{props.schdata}</p>
        <p className='dat'>{props.date}</p>
      </div>
    </>
  )
}
