import React from 'react'
import './eventDetails.css'
import { useParams } from 'react-router-dom';
import MainSection from './mainSection/MainSection';
import NeedSection from './needSection/NeedSection';

function EventDetails() {
    const { index } = useParams();
  return (
    <div className="event-details">
        <MainSection />
        <NeedSection />
    </div>
  )
}

export default EventDetails