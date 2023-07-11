import React from 'react'
import ScheduleItem from './ScheduleItem'

function ScheduleSection({event}) {
  const dt = event.schedule.data; 
  return (
    <>
    <h2>{event.schedule.title}</h2>
    <div className='gc'>
     {
      dt.map((element)=>{
         return <ScheduleItem schdata={element.task} date={element.date}/>
      })
    }
    </div>
    </>
  )
}

export default ScheduleSection