import React, { useState } from 'react'
import AwardItem from './AwardItem';
import trophyy from "../../../images/trophy2.png";
function AwardSection({event}) {
  return (
    <>
    <h2 id='awards'>Awards & Prizes</h2>
    <div className='titletrophy'>
   <h3 className='awtitle'>{event.awards.title}</h3>
    {/* <img className='tphy' src={trophyy} alt="this is trophy "/> */}
   </div>
    
    <div className='award-container'>
      {
        event.awards.array.map((element)=>{
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