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
import DownloadSection from './downloadSection/DownloadSection';
import UploadSection from './uploadSection/UploadSection';

function EventDetails() {
  const { events, setSection, setEventIndex } = useContext(StoreContext)
    const { index } = useParams();
    setEventIndex(index)
    setSection(4)
  return (
    <div className="event-details">
        <MainSection event={events[index]} />
        <NeedSection event={events[index]} />
        <GraphSection event={events[index]} />
        {/* <WorkflowSection event={events[index]} index={index} /> */}
        <ScheduleSection event={events[index]} />
        <AwardSection event={events[index]} />
        <DownloadSection event={events[index]} />
        <UploadSection event={events[index]} />
        <Footer />
    </div>
  )
}

export default EventDetails