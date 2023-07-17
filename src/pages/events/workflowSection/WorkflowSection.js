import React, { useEffect } from 'react'
import './workflow.css'
import tnkc from "../../../images/tnkcimage.png";

export const DetailsCard = ({ enroll, prize }) => {
  return (
    <div className="card-event">
      <img src={tnkc} alt="tnkc image" />
      <button onClick={enroll} >Enroll Now</button>
      <hr />
      <div className="card-body">
        <h3>
          <span class="material-symbols-outlined">
            trophy
          </span>{prize.title}
        </h3>
        <ul>
         {prize.sib.map((item, key)=><li key={key}>
          <h4>{item.text}</h4>
          <p>{item.description} : {item.money}</p>
         </li>)}
        </ul>
        <h3>
          <span class="material-symbols-outlined">workspace_premium</span>
          Event certificate
        </h3>
      </div>
    </div>
  )
}

function WorkflowSection({ event }) {

 useEffect(()=>{
  const last = document.querySelector('.workflow-container .content:last-child')
  const lastNum = document.querySelector('.workflow-container .num:last-child')
  console.log(lastNum);
  if(event?.workflow.data.length % 2 === 0){
    last.classList.add('even-last')
    lastNum.style.transform = 'translateX(-17px)'
  }else{
    last.classList.add('odd-last')
    lastNum.style.transform = 'translateX(17px)'
  }
 }, [event])

  return (
    <div className='workflow-section' id='workflow'>
      <h2>{event.workflow.title}</h2>
      <div className="body">

        <div className="workflow-container">
        <div className="numbers">
        {event.workflow.data.map((item, key) => (
            <div className="num" >
              <p>{key+1}</p>
            </div>
          ))}
          <div className="num">
          <span class="material-symbols-outlined">
tour
</span>
            </div>
        </div>

          <div className="contents">
          {event.workflow.data.map((item, key) => (
            <div className="content" >
              <h4>{item}</h4>
            </div>
          ))}
          </div>
        </div>
        <DetailsCard prize={event.prize} />
      </div>
    </div>
  )
}

export default WorkflowSection