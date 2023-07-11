import React from 'react'
import './awardsection.css';
export default function AwardItem(props) {
  return (
    <div>
      <div className='rewarditem'>
      <p className='rn'>{props.con}</p>
      <p className='pd'>{props.pr}</p>
      <p className='pm'>{props.inr}</p>
      </div>
     
    </div>
  )
}
