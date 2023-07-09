import React from 'react'
import './eventDetails.css'
import { useParams } from 'react-router-dom';

function EventDetails() {
    const { index } = useParams();
  return (
    <div>EventDetails {index}</div>
  )
}

export default EventDetails