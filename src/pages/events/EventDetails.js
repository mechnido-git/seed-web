import React from 'react'
import './eventDetails.css'
import { useParams } from 'react-router-dom';
import MainSection from './mainSection/MainSection';
import NeedSection from './needSection/NeedSection';
import GraphSection from './graphSection/GraphSection';
import WorkflowSection from './workflowSection/WorkflowSection';

function EventDetails() {
    const { index } = useParams();
  return (
    <div className="event-details">
        <MainSection />
        <NeedSection />
        <GraphSection />
        <WorkflowSection />
    </div>
  )
}

export default EventDetails