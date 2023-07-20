import React from 'react'
import './awardsection.css';
export default function AwardItem(props) {
  return (
    <>
      <div className='rewarditem'>
      <span className='rn'>{props.con}</span>
      <span className='pd'>{props.pr}</span>
      <span className='pm'>{props.inr}</span>
      </div>
     
    </>
  )
}
