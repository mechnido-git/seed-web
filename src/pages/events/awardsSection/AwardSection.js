import React, { useState } from 'react'
import AwardItem from './AwardItem';
import trophyy from "../../../images/trophy2.png";
function AwardSection({event}) {
  const dt = event.awards.array[0].data;
  const pt= event.awards.array[1].data;
  return (
    <>
    <h2>Awards & Prizes</h2>
    <div className='titletrophy'>
   <h3 className='awtitle'>{event.awards.array[0].title}</h3>
    {/* <img className='tphy' src={trophyy} alt="this is trophy "/> */}
   </div>
    
    <div className='grid-container'>
      {
        dt.map((element)=>{
          return <>
           <AwardItem con={element.h1} pr={element.p} inr={element.money}/>
          </>
        })
      }
    </div>

   
    <div className='titletrophy'>
   <h3 className='awtitle'>{event.awards.array[1].title}</h3>
    {/* <img className='tphy' src={trophyy} alt="this is trophy "/> */}
   </div>
   

    <div className='grid-container'>
      {
        pt.map((element)=>{
          return <>
           <AwardItem con={element.h1} pr={element.p} inr={element.money}/>
          </>
        })
      }
    </div>
    </>
  )
}

export default AwardSection;