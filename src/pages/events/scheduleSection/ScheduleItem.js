import React from 'react'
import "./schedule.css"
export default function ScheduleItem(props) {
  return (
    <>
      <div className="schdat">
        <span className='sch'>{props.schdata}</span>
        <span className='dat'>{props.date}</span>
      </div>
    </>
  )
}
