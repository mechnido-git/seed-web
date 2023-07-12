import React from 'react'
import "./mainsectionstyle.css";
import tnkc from "../../../images/tnkcimage.png";
import TextLimiter from '../../../components/textLimiter/TextLimiter';
import { DetailsCard } from '../workflowSection/WorkflowSection';

function MainSection({event}) {
  return (
    <>
    <div className='main-section'>
      
    <div className="title"> 
      <h1><span style={{color:"var(--primary)"}}>TN</span>KC</h1>
      <h2 className='subtitle'> {event.subtitle}</h2>
      <TextLimiter number={250} text={event.about.description} />
      <div className='btn'>Explore</div>
    </div>

    {/* <div className='titleimage'>
      <img className='image' src= {tnkc} alt="tnkc image"></img>
    </div> */}
      <div className="card-container">
      <DetailsCard prize={event.prize} />
      </div>

    </div>

   
    </>
  )
}

export default MainSection