import React, { useContext } from 'react'
import './eventDetails.css'
import { useParams } from 'react-router-dom';
import MainSection from './mainSection/MainSection';
import NeedSection from './needSection/NeedSection';
import GraphSection from './graphSection/GraphSection';
import WorkflowSection from './workflowSection/WorkflowSection';
import { StoreContext } from '../../store/StoreContext';
import ScheduleSection from './scheduleSection/ScheduleSection';
import AwardSection from './awardsSection/AwardSection';
import Footer from '../../components/footer/Footer';

function EventDetails() {
  const { eventList, setSection, setEventIndex } = useContext(StoreContext)
    const { index } = useParams();
    setEventIndex(index)
    setSection(4)
  return (
    <div className="event-details">
        <MainSection event={eventList[index]} />
        <NeedSection event={eventList[index]} />
        <GraphSection event={eventList[index]} />
        <WorkflowSection event={eventList[index]} index={index} />
        <ScheduleSection event={eventList[index]} />
        <AwardSection event={eventList[index]} />
        <Footer />
    </div>
  )
}

export default EventDetails