import React, { useContext } from 'react'
import './eventDetails.css'
import { useParams } from 'react-router-dom';
import MainSection from './mainSection/MainSection';
import NeedSection from './needSection/NeedSection';
import GraphSection from './graphSection/GraphSection';
import WorkflowSection from './workflowSection/WorkflowSection';
import { StoreContext } from '../../store/StoreContext';

function EventDetails() {
    const { index } = useParams();
    const { eventList } = useContext(StoreContext)
  return (
    <div className="event-details">
        <MainSection event={eventList[index]} />
        <NeedSection event={eventList[index]} />
        <GraphSection event={eventList[index]} />
        <WorkflowSection event={eventList[index]} />
    </div>
  )
}

export default EventDetails