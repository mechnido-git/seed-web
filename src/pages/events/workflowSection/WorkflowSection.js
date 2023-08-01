import React, { useEffect, useContext } from 'react'
import './workflow.css'
import tnkc from "../../../images/tnkcimage.png";
import { StoreContext } from '../../../store/StoreContext';
import { useParams } from 'react-router-dom';


const checkEnroll = (item , userId) => {
  let flag = false;
  
  item.enrolled?.forEach((item) => {
    
    if (item.userId === userId) flag = true;
  });
  return flag;
};

export const DetailsCard = ({ enroll, prize , event , userId}) => {
 
  let enrolled = checkEnroll(event, userId);// checking whether the user with userId is enrolled with the event "event"
  return (
    <div className="card-event">
      <img src={tnkc} alt="tnkc image" />
      <button className={enrolled? "disabledbtn": ""} disabled = {enrolled} onClick={ enroll} >{enrolled? "Enrolled":"Enroll"}</button>
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
  // console.log(lastNum);
  if(event?.workflow.data.length % 2 === 0){
    last.classList.add('even-last')
    lastNum.style.transform = 'translateX(-17px)'
  }else{
    last.classList.add('odd-last')
    lastNum.style.transform = 'translateX(17px)'
  }
 }, [event]);
 const {userId, events}= useContext(StoreContext);
 const { index } = useParams();

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
        <DetailsCard prize={event.prize} userId= {userId} event={events[index]}/>
      </div>
    </div>
  )
}

export default WorkflowSection