import React from 'react'
import "./mainsectionstyle.css";
import tnkc from "../../../images/tnkcimage.png";

function MainSection({event}) {
  return (
    <>
    <div className='mainsection'>
      
    <div className="title"> 
      <h1><span style={{color:"var(--primary)"}}>TN</span>KC</h1>
      <h2 className='subtitle'> {event.subtitle}</h2>
      <p>{event.about.description}</p>
      <div className='btn'>Explore</div>
    </div>

    <div className='titleimage'>
      <img className='image' src= {tnkc} alt="tnkc image"></img>
    </div>

    </div>

   
    </>
  )
}

export default MainSection