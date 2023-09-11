import React, { useContext } from 'react'
import "./mainsectionstyle.css";
import tnkc from "../../../images/tnkcimage.png";
import TextLimiter from '../../../components/textLimiter/TextLimiter';
import { DetailsCard } from '../workflowSection/WorkflowSection';
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { StoreContext } from '../../../store/StoreContext';
import { useParams } from 'react-router-dom';

function MainSection({event}) {
  const {userId, events} = useContext(StoreContext);
  const { index } = useParams();
  const loc = useLocation();
  return (
    <>
    <div className='main-section' id='intro'>
      
    <div className="title"> 
      <h1>{event.title}</h1>
      <h2 className='subtitle'> {event.subtitle}</h2>
      <TextLimiter number={250} text={event.about.description} />
      <HashLink className="btn" to={`${loc.pathname}/#schedule`} smooth>
            Explore
        </HashLink>
     
    </div>

    {/* <div className='titleimage'>
      <img className='image' src= {tnkc} alt="tnkc image"></img>
    </div> */}
      <div className="card-container">
      <DetailsCard userId= {userId} event={event}/>
      </div>

    </div>

   
    </>
  )
}


export default MainSection