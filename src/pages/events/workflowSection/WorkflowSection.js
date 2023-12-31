import React, { useEffect, useContext, useState } from 'react'
import './workflow.css'
import tnkc from "../../../images/tnkcimage.png";
import { StoreContext } from '../../../store/StoreContext';
import { useParams } from 'react-router-dom';
import RegisterForm from '../../../components/RegisterForm';
import PayDue from '../../../components/payDue/PayDue';


const checkEnroll = (event, userId) => {
  let enrolled = false;
  let fullPay = false;
  let phase = 1;
  event.enrolled?.forEach((item) => {
    console.log(item);
    if (item.userId === userId) {
      enrolled = true
      if (item.fullPay) {
        fullPay = true
        phase = null
      } else {
        if (item.phase == 2) {
          phase = 2
        }

      }
    }
  });
  return { enrolled, fullPay, phase };
};

export const DetailsCard = ({ event, userId }) => {

  const [register, setRegister] = useState(false)
  const [due, setDue] = useState(false)
  const { userName, userEmail } = useContext(StoreContext);

  const getRegister = () => {
    console.log(event);
    let flag = false
    event.enrolled?.forEach((item) => {
      console.log(item);
      if (item.userId === userId) {
        if (item.fullPay) {
          flag = true
          return alert("Alredy registered");
        } else {
          if (item.phase == 2) {
            flag = true
            return alert("Alredy registered");
          } else {
            flag = true
            return setDue(true)
          }
        }
      } 
    })
    if(!flag) setRegister(true);
  };

  let { enrolled, fullPay, phase } = checkEnroll(event, userId);// checking whether the user with userId is enrolled with the event "event"
  return (
    <>
      <div className="card-event">
        <img src="https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/events%2FhUaPM58nSpDcAbUNXSf7%2Flogo%2Flogo.jpg?alt=media&token=8f67ea31-a179-4fc1-a530-2e4c0443fad9&_gl=1*pls390*_ga*OTQxNTA1NzcyLjE2ODc5NTg1OTk.*_ga_CW55HF8NVT*MTY5NzkyMTQyNy41MS4xLjE2OTc5MjE5MDAuNTEuMC4w" alt="tnkc image" />
        <button className={enrolled ? (enrolled && !fullPay) ? (enrolled && !fullPay && (phase == 2)) ? "disabledbtn" : "" : "disabledbtn" : ""}
          disabled={enrolled ? (enrolled && !fullPay) ? (enrolled && !fullPay && (phase == 2)) ? true : false : true : false}
          onClick={getRegister}>
          {enrolled ? (enrolled && !fullPay) ? (enrolled && !fullPay && (phase == 2)) ? "Enrolled" : "Pay Due" : "Enrolled" : "Enroll"}
        </button>
        <hr />
        <div className="card-body">
          <ul>
            {/* {prize.sib.map((item, key)=><li key={key}>
          <h4>{item.text}</h4>
          <p>{item.description} : {item.money}</p>
         </li>)} */}
            <li>
              <h4>Overall Cash Prize</h4>
              <p>INR{" "}{event.overAllCash}</p>
            </li>
            <li>
              <h4>Registration fee</h4>
              <p>INR{" "}{event.regFeeTxt}(Including 18% GST)</p>
            </li>
          </ul>
          <h3>
            <span class="material-symbols-outlined">workspace_premium</span>
            Event certificate
          </h3>
        </div>
      </div>
      {register && (
        <div className="wrapper-reg">
          <div className="blocker"></div>
          <RegisterForm
            event={event}
            userName={userName}
            email={userEmail}
            setRegister={setRegister}
          />
        </div>
      )}
      {due && (
        <div className="wrapper-reg">
          <div className="blocker"></div>
          <PayDue
            event={event}
            userName={userName}
            email={userEmail}
            setDue={setDue}
          />
        </div>
      )}
    </>
  )
}

function WorkflowSection({ event }) {

  useEffect(() => {
    const last = document.querySelector('.workflow-container .content:last-child')
    const lastNum = document.querySelector('.workflow-container .num:last-child')
    // console.log(lastNum);
    if (event?.workflow.data.length % 2 === 0) {
      last.classList.add('even-last')
      lastNum.style.transform = 'translateX(-17px)'
    } else {
      last.classList.add('odd-last')
      lastNum.style.transform = 'translateX(17px)'
    }
  }, [event]);
  const { userId, events } = useContext(StoreContext);
  const { index } = useParams();

  return (
    <div className='workflow-section' id='workflow'>
      <h2>{event.workflow.title}</h2>
      <div className="body">

        <div className="workflow-container">
          <div className="numbers">
            {event.workflow.data.map((item, key) => (
              <div className="num" >
                <p>{key + 1}</p>
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
        <DetailsCard userId={userId} event={event} />
      </div>
    </div>
  )
}

export default WorkflowSection